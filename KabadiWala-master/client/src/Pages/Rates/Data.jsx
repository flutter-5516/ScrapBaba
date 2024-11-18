import others from "../../Assets/Other.jpg"
import appliances from "../../Assets/appliances.jpg"
import metal from "../../Assets/metal.jpg"
import paper from "../../Assets/paper.jpg"
import plastic from "../../Assets/plastic.jpg"




export const data = [
    {
        id: crypto.randomUUID(),
        category: "Plastic",
        content: "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. HDPE, LDPE, MLP, PVC, PP, PET etc. are types of plastics used for different purposes.",
        image: plastic,
        data: [
            {
                id: crypto.randomUUID(),
                name: "Soft Plastic",
                price: "13",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "Hard Plastic",
                price: "15",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "HPP",
                price: "45",
                icon: ""
            },
        ]

    },
    {
        id: crypto.randomUUID(),
        category: "Paper",
        content: "Paper is manufactured in thin sheets from the pulp of wood or other fibrous substances. Paper scrap includes newspaper, books cartons, magazines, Beverage carton etc.",
        image: paper,
        data: [
            {
                id: crypto.randomUUID(),
                name: "Newspaper",
                price: "14",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "Books",
                price: "44",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "White Papers",
                price: "32",
                icon: ""
            },
        ]

    },
    {
        id: crypto.randomUUID(),
        category: "Metal",
        content: "Scrap metal are an important source of industrial metals and alloys, particularly in the production of steel, copper, lead, aluminum, and zinc. Smaller amounts of tin, nickel, magnesium, and precious metals are also recovered from scrap.",
        image: metal,
        data: [
            {
                id: crypto.randomUUID(),
                name: "Iron Scrap",
                price: "315",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "Copper Scrap",
                price: "894",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "Brass",
                price: "505",
                icon: ""
            },
        ]

    },
    {
        id: crypto.randomUUID(),
        category: "Appliances",
        content: "E-waste is electronic products that are unwanted, not working, and nearing or at the end of their “useful life.” It includes TV, refrigerator, mobile phones, printers etc.",
        image: appliances,
        data: [
            {
                id: crypto.randomUUID(),
                name: "TV",
                price: "455",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "Refrigerator",
                price: "900",
                icon: ""
            },

        ]

    },
    {
        id: crypto.randomUUID(),
        category: "Others",
        content: "It Includes, beer bottles, women’s hair, mix-waste, tyre, mattresses etc.",
        image: others,
        data: [
            {
                id: crypto.randomUUID(),
                name: "Tyre",
                price: "33",
                icon: ""
            },
            {
                id: crypto.randomUUID(),
                name: "Battery",
                price: "234",
                icon: ""
            },
        ]

    },
]