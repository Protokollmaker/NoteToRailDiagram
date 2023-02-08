import {it, expect} from "vitest";
import { formatCurrency } from "../../src/lib/functions/formatCurrency";

it("ads the € before the given number", () => {
    const result = formatCurrency(1);
    expect(result).toBe("€1");
});