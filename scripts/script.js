function SVGEl(element, total_frames) {
    this.el = element;
    this.current_frame = 0;
    this.total_frames = total_frames;
    this.path = [];
    this.length = [];
    this.handle = 0;
    this.init();
}

SVGEl.prototype.init = function() {
    var el = this;
    [].slice.call(this.el.querySelectorAll("path")).forEach(function(t, n) {
      e.path[n] = t;
      var r = e.path[n].getTotalLength();
      e.length[n] = r;
      e.path[n].style.strokeDasharray = r + " " + r;
      e.path[n].style.strokeDashoffset = r;
  });
};

SVGEl.prototype.draw = function() {
    var e = this
      , t = this.current_frame / this.total_frames;
    if (t > 1) {
            window.cancelAnimFrame(this.handle)
        } else {
                this.current_frame++;
                for (var n = 0, r = this.path.length; n < r; n++) {
                            this.path[n].style.strokeDashoffset = Math.floor(this.length[n] * (1 - t))
                        }
                this.handle = window.requestAnimFrame(function() {
                            e.draw()
                        })
            }
}
;
define(["jquery"], function(e) {
    window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 1e3 / 60)
                    }
        }();
    window.cancelAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) {
                        window.clearTimeout(e)
                    }
        }()
})

