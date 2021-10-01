import { Renderable } from "../Rendering/Renderable";

export class DummyFloor implements Renderable {
    public render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "darkgray";
        ctx.fillRect(0, 700, 4000, 20);
    }
}
