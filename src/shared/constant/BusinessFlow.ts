export const BusinessFlow = [
    {
        procresses: "Order",
        type: "purchases",
        transaction: []
    },
    {
        procresses: "Supplier Invoice (Purchases)",
        type: "purchases",
        transaction: [
            {
                step:"Purchase Merchandise",
                dr: [
                    {   description:"Inventory"}  
                ],
                cr: [
                    {   description:"Account Payable"}  
                ]
            }
        ]
    },
    {
        procresses: "Payment (Purchases)",
        type: "purchases",
        transaction: [
            {
                step:"Cash Payment",
                dr: [
                    {   description:"Account Payable"}  
                ],
                cr: [
                    {   description:"Cash"}  
                ]
            }
        ]
    },
    {
        procresses: "Request",
        type: "sales",
        transaction: []
    },
    {
        procresses: "Customer Invoice(Sales)",
        type: "sales",
        transaction: [
            {
                step:"Sell Merchandise",
                dr: [
                    {   description:"Account Receivable"},
                    {   description:"COGS"},
                ],
                cr: [
                    {   description:"Sales"},
                    {   description:"Inventory"},
                ]
            }
        ]
    },
    {
        procresses: "Payment (Sales)",
        type: "sales",
        transaction: [
            {
                step:"Cash Collection",
                dr: [
                    {   description:"Cash"}  
                ],
                cr: [
                    {   description:"Account Receivable"}  
                ]
            }
        ]
    }
]