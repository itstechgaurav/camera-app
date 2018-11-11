class camera {
    constructor(id, can) {
        this.init(id, can);
    }

    init(id, can) {
        this.id = id;
        this.display = document.getElementById(id);
        this.stream();
        this.canvas = document.getElementById(can);

        this.style(["transform", "rotateY(180deg)"]);
    }

    stream() {
        let ops = {
            audio: false,
            video: {
                facingMode: "user",
                width: 200,
                height: 200
            }
        };
        navigator.mediaDevices.getUserMedia(ops)
            .then(function (d) {
                this.display.srcObject = d;
            }.bind(this))
            .catch(function (e) {
                console.log(e);
            });
    }

    snap() {
        this.canvas.width = this.display.videoWidth;
        this.canvas.height = this.display.videoHeight;
        let dplay = {
            w: this.display.videoWidth,
            h: this.display.videoHeight
        };
        let can = this.canvas.getContext('2d');
        can.scale(-1, 1);
        can.drawImage(this.display, 0, 0, dplay.w * -1, dplay.h);
        return this.canvas.toDataURL('image/png');
    }

    style(o) {
        this.display.style[o[0]] = o[1];
    }
}
