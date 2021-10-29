import { Renderable } from "../../../Rendering/Renderable";
import { Updateable } from "../../Updateable/Updateable";

export class IteratableLinkedList<T extends Renderable & Updateable & IfRemove> {
    private rootNode: Node<T> | undefined = undefined;

    constructor() {}

    public update(elapsedTime: number) {
        let node: Node<T> | undefined = this.rootNode;
        while (node !== undefined) {
            node.update(elapsedTime);

            if (node.data.ifRemove) {
                let nextNode: Node<T> | undefined = node.nextNode;
                this.deleteNode(node);
                node = nextNode;
            } else {
                node = node.nextNode;
            }
        }
    }

    public render(ctx: CanvasRenderingContext2D) {
        let node: Node<T> | undefined = this.rootNode;
        while (node !== undefined) {
            node.render(ctx);
            node = node.nextNode;
        }
    }

    public pushNode(nodeData: Renderable & Updateable & IfRemove) {
        let newNode: Node<T> = new Node(nodeData);
        if (this.rootNode === undefined) {
            this.rootNode = newNode;
        } else {
            let lastNode: Node<T> = this.rootNode;
            while (lastNode.nextNode !== undefined) {
                lastNode = lastNode.nextNode;
            }

            newNode.previousNode = lastNode;
            lastNode.nextNode = newNode;
        }
    }

    private deleteNode(node: Node<T>) {
        let prevNode: Node<T> | undefined = node.previousNode;
        let nextNode: Node<T> | undefined = node.nextNode;

        if (prevNode) {
            prevNode.nextNode = nextNode;
        } else {
            this.rootNode = nextNode;
        }
        if (nextNode) {
            nextNode.previousNode = prevNode;
        }
    }
}

class Node<T extends Renderable & Updateable & IfRemove> {
    public previousNode: Node<T> | undefined = undefined;
    public nextNode: Node<T> | undefined = undefined;

    constructor(public data: Renderable & Updateable & IfRemove) {}

    public render(ctx: CanvasRenderingContext2D) {
        this.data.render(ctx);
    }

    public update(elapsedTime: number) {
        this.data.update(elapsedTime);
    }
}

export interface IfRemove {
    ifRemove: boolean;
}
