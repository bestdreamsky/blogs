//导入插件
var gulp = require('gulp');
var changed = require('gulp-changed');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
//当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-minify-css');
var watch = require('gulp-watch');
var spriter = require('gulp-css-spriter');
var copy = require('gulp-copy');
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');
var tinypng = require('gulp-tinypng');
//需要处理的文件配置
var config = {
    path: {
        js:[
            'public/js/**/*.js'
        ],
        less: [
            'public/less/**/*.less',
            '!public/less/amazeui/**/*.less'
        ],
        css: [
            'public/css/**/*.css'
        ],
        images:[
            'public/images/**/*.{png,jpg,gif,ico}'
        ],
        fonts: [
            'public/fonts/**/*.*'
        ]
    },
    dist: {
        js: 'public/dist/js',
        css: 'public/dist/css',
        images:'public/dist/images',
        fonts: 'public/dist/fonts'
    },
    copy:{
        js:'F:\\fsp-parent\\wap\\src\\main\\webapp\\static\\js',
        css:'F:\\fsp-parent\\wap\\src\\main\\webapp\\static\\css',
        images:'F:\\fsp-parent\\wap\\src\\main\\webapp\\static\\images',
        dist_js:'F:\\fsp-parent\\wap\\src\\main\\webapp\\static\\dist\\js',
        dist_css:'F:\\fsp-parent\\wap\\src\\main\\webapp\\static\\dist\\css',
        dist_images:'F:\\fsp-parent\\wap\\src\\main\\webapp\\static\\dist\\images'
    }
};
//uglify任务
gulp.task('uglify', function () {
    return gulp.src(config.path.js)
        // `changed` 任务需要提前知道目标目录位置
        // 才能找出哪些文件是被修改过的
        .pipe(changed(config.dist.js))
        // 只有被更改过的文件才会通过这里
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(uglify({
            output: {
                comments:false
            },
            mangle: { except: ['require', 'exports', 'module', '$'] }//排除混淆关键字
        }))
        .pipe(gulp.dest(config.dist.js))
});

//less任务
gulp.task('less', function () {
    gulp.src(config.path.less)
        .pipe(changed(config.path.less[0]))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less({}))
        .pipe(cssmin({
            compatibility: 'ie7'
        }))
        .pipe(gulp.dest(config.dist.css))
});
//css任务
gulp.task('css', function () {
    gulp.src(config.path.css)
            .pipe(changed(config.dist.css))
            .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
            .pipe(cssmin({
                compatibility: 'ie7'
            }))
            // .pipe(spriter({
            // }))
            .pipe(gulp.dest(config.dist.css))
           // .pipe(gulp.dest('../../we-app/we-app/css'));
});
//图片压缩任务
gulp.task('tinypng', function () {
    gulp.src(config.path.images)
        .pipe(changed(config.dist.images))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(tinypng('d5YRwJGaV_083n31CmtlgE7DcjcVEe08'))
        .pipe(gulp.dest(config.dist.images));
});

//监视任务
gulp.task('live', function () {
    gulp.watch(config.path.js, ['uglify']);
    gulp.watch(config.path.less, ['less']);
    gulp.watch(config.path.css, ['css']);
    gulp.watch(config.path.images, ['tinypng']);
});