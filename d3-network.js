import {
	Runtime,
	Inspector,
} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js"
import define from "https://api.observablehq.com/@d3/disjoint-force-directed-graph/2.js?v=4"
new Runtime().module(define, (name) => {
	if (name === "chart")
		return new Inspector(
			document.querySelector("#observablehq-chart-5e6c7ca8")
		)
})
