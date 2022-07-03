class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(element) {
        this.top += 1;
        this.items[this.top] = element;
    }

    pop() {
        if (this.top === -1) {
            return undefined;
        }

        const top = this.items[this.top];
        this.top -= 1;
        return top;
    }
}

// Define a test suite for the Stack class.
describe("My Stack", () => {
    let stack;

    beforeEach(() => {
        // Create a new Stack instance before each test.
        stack = new Stack();
    });

    // test/it: individual test cases.
    // make test pass: it.todo(...).

    it("is created empty", () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it("can push to the top", () => {
        stack.push("BQB");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("BQB");

        stack.push("NHT");
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe("NHT");
    });

    it("can pop off from the top", () => {
        // push elements to the stack
        stack.push("BQB");
        stack.push("NHT");

        // pop elements from the stack
        // let temp = stack.pop();
        // expect(temp).toBe("NHT");
        stack.pop();
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("BQB");

        // temp = stack.pop();
        // expect(temp).toBe("BQB");
        stack.pop();
        expect(stack.top).toBe(-1);
        expect(stack.peek).toBe(undefined);
    });
});
