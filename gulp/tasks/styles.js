import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import size from "gulp-size";
import browsersync from "browser-sync";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import gcmq from 'gulp-group-css-media-queries';
const sass = gulpSass(dartSass);

export function styles() {
  return app.gulp
    .src(app.path.src.styles)
    .pipe(sourcemaps.init())
    .pipe(gcmq())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 3 versions'],
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(rename("styles.min.css"))
    .pipe(size())
    .pipe(sourcemaps.write("./"))
    .pipe(app.gulp.dest(app.path.dist.styles))
    .pipe(browsersync.stream());
}
