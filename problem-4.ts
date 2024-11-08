{
    type Rectangle = { shape: "rectangle"; width: number; height: number };
    type Circle = { shape: "circle"; radius: number };

    function calculateShapeArea(shape: Circle | Rectangle): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius ** 2;
        } else {
            return shape.width * shape.height;
        }
    }

}