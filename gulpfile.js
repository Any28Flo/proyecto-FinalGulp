var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

var rutasEntrada = {
    rutaScss : "./public/scss/*.scss",
    rutaHTML : "./public/*.html",
    rutaJs  : "./public/js/*.js"
};
var rutasSalida = {
    rutaEstandar : "./servPublic",
    
}
/*TASK JS*/
gulp.task('transformaJs' , function(){
    gulp.src(rutasEntrada.rutaJs)
        .pipe(uglify())
        .pipe(gulp.dest("servPublic/js"));
})

/*TASK SASS*/

gulp.task('transformaSass',function(){
    gulp.src(rutasEntrada.rutaScss)
        .pipe(sass({outputStyle:'compressed'}).on ('error',sass.logError))
        .pipe(gulp.dest(rutasSalida.rutaEstandar+"/css"));
});
/*TASK HTML*/
gulp.task("preparaHTML", function(){
    gulp.src(rutasEntrada.rutaHTML)
        .pipe(gulp.dest(rutasSalida.rutaEstandar));
})
