

var im = new SimpleImage("rodger.png")

function swapRedGreen(pixel) {
    var y = pixel.getRed();
    var x = pixel.getGreen();
    pixel.setGreen(y);
    pixel.setRed(x);
}

for (var pixel of im.values()) {
    swapRedGreen(pixel);
}
print(im)

function swapBlueYellow(pixel) {
    var y = pixel.getBlue()
    if (y = "227") {
        pixel.setGreen(255);
        pixel.setBlue(0);
        pixel.setRed(255)
    }
}

var devil = new SimpleImage("duke_blue_devil.png")
print(devil.getBlue(30,30))

for (var pixel of devil.values()) {
    if (pixel.getBlue = 227) {
        pixel.setGreen(255);
        pixel.setBlue(0);
        pixel.setRed(255)
    }
}
print(devil)