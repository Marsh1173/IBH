import { ImageAssetManager } from "../../../DataStorage/ImageAssetManager";
import { HumanInterface } from "../../Mobs/Human/HumanInterface";
import { drawShape } from "../Renderable";

export function renderHuman(this: HumanInterface, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";

    //drawShape(ctx, this.points);

    let img = ImageAssetManager.images["character"];
    let imgW: number = img.width * 0.55;
    let imgH: number = img.height * 0.55;

    ctx.drawImage(img, this.position.x - imgW / 2, this.position.y - imgH / 2, imgW, imgH);

    this.healthHandler.render(ctx);
}
