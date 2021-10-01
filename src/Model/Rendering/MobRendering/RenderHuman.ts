import { ImageAssetManager } from "../../../DataStorage/ImageAssetManager";
import { HumanInterface } from "../../Mobs/Human/HumanInterface";

export function renderHuman(this: HumanInterface, ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.strokeRect(this.position.x + this.dimensions.width / -2, this.position.y + this.dimensions.height / -2, this.dimensions.width, this.dimensions.height);

    let img = ImageAssetManager.images["character"];
    let imgW: number = img.width * 0.6;
    let imgH: number = img.height * 0.6;

    ctx.drawImage(img, this.position.x - imgW / 2, this.position.y - imgH / 2, imgW, imgH);

    this.healthHandler.render(ctx);
}
