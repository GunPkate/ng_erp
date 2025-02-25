import { Btn } from "src/shared/interface/Btn";

export const AllBtn: Btn[] = [
    {
      title: 'File',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title: 'Purchase',
      inputBtn: [
        {
          btnTitleName: "Supplier",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Purchase Invoice",
          subMenu: "2",
          subBtn: []
        },
        {
          btnTitleName: "Purchase Payment",
          subMenu: "3",
          subBtn: []
        },
        {
          btnTitleName: "All Purchase",
          subMenu: "4",
          subBtn: []
        },
        
      ]
    },{
      title: 'Sales',
      inputBtn: [
        {
          btnTitleName: "Customers",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Invoice",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Invoice"},
            {btnTitleName: "Receipt"},
            {btnTitleName: "Report"},
          ]
        },
        {
          btnTitleName: "Sale Payment",
          subMenu: "3",
          subBtn: []
        },
        
      ]
    },{
      title: 'Stock',
      inputBtn: [
        {
          btnTitleName: "Categories",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Products",
          subMenu: "2",
          subBtn: []
        },
        {
          btnTitleName: "Stock Details",
          subMenu: "3",
          subBtn: []
        }, 
        {
          btnTitleName: "Low Stock",
          subMenu: "4",
          subBtn: []
        }, 
        {
          btnTitleName: "Empty Stock Details",
          subMenu: "5",
          subBtn: []
        }, 
      ]
    },{
      title: 'Setting',
      inputBtn: [
        {
          btnTitleName: "User Setting",
          subMenu: "1",
          subBtn: [
            {btnTitleName: "Add User"},
            {btnTitleName: "User Type"},
          ]
        },
        {
          btnTitleName: "Account Setting",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Account Head"},
            {btnTitleName: "Account Control"},
            {btnTitleName: "Fiscal Year"},
          ]
        },    
      ]
    },{
      title: 'Reports',
      inputBtn: [
        {
          btnTitleName: "Print Invoice",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "2",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    },{
      title : 'Transactions',
      inputBtn : [
        {
          btnTitleName: "Transaction List",
          subMenu: "1",
          subBtn:[]
        },
        {
          btnTitleName: "General Ledger",
          subMenu: "2",
          subBtn:[]
        },
        {
          btnTitleName: "Sale Report",
          subMenu: "3",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        {
          btnTitleName: "Purchase Report",
          subMenu: "4",
          subBtn: [
            {btnTitleName: "Daily"},
            {btnTitleName: "Weekly"},
            {btnTitleName: "Monthly"},
          ]
        },
        
      ]
    }
  ]
