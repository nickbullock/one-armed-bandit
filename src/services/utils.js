class Utils {
    static randomPositions() {
        const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const win = random(0, 100);
        if(win > 70){
            const x = random(1, 5);

            return [x, x, x];
        }

        return [random(1, 5), random(1, 5), random(1, 5)];
    }
}

export default Utils;