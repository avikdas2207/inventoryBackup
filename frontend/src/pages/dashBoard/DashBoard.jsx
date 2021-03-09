import React, { useState } from "react";
import Customer from "../customer/customer.jsx"
import Header from "../../components/Header/Header.jsx";
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx";
import SimpleCard from "../../components/welcome_card/welcome.jsx";
import Brands from "../brands/brands.jsx";
import Cities from "../city/city.jsx";
import GST_Tratment from "../gst_treatment/gst_treatment.jsx";
import Payment_terms from "../payment_terms/payment_terms.jsx";
import Salutations from "../salutation/salutation.jsx";
import States from "../state/state.jsx";
import Units from "../units/units.jsx";
import TaxPreference from "../tax_preference/tax_preference.jsx";
import Vendor from "../vendor/vendor.jsx";

import BillSundries from '../bill_sundries/bill_sundries.jsx';
import Category from '../category/category.jsx';
import Country from '../country/country.jsx';
import Currencies from '../currencies/currencies.jsx';
// import Items from "../items/items.jsx";
// import Manufactures from '../manufactures/manufactures.jsx'
// import Taxes from '../taxes/taxes.jsx';
// import Voucher from '../voucher/voucher.jsx';
// import Warehouse from '../ware/ware.jsx';




import "./dashBoard.scss";
import Items from "../items/items.jsx";
import Manufactures from '../manufactures/manufactures.jsx'
import Taxes from '../taxes/taxes.jsx';
import Voucher from '../voucher/voucher.jsx';
import Warehouse from '../ware/ware.jsx';
import Org from '../org/org.jsx';
import Users from "../users/users.jsx";
import PurchaseRefund from '../purchase_refund/purchase_refund.jsx';
import Payment from '../payment/payment.jsx';
import Recipt from "../recipt/recipt.jsx";
import Refund from "../refund/refund.jsx";
import DeliveryNote from "../delivery_note/delivery_note"
import IndentOrder from "../indent_order/indent_order.jsx";
import PurchaseInvoice from "../purchase_invoice/purchase_invoice";
import PurchaseOrder from "../purchase_order/purchase_order.jsx";
import PurchaseReturn from "../purchase_return/purchase_return.jsx";
import ReceiptNote from "../receipt_note/receipt_note.jsx";
import SalesInvoice from "../sales_invoice/sales_invoice.jsx";
import SalesOrder from "../sales_order/sales_order";
import SalesReturn from "../sales_return/sales_return.jsx";
import StockTransfer from "../stock_transfer/stock_transfer.jsx";
import ManageOrg from "../manageOrg/manageOrg.jsx";

const DashBoard = () => {
  const [isDrawerMin, setIsDrawerMin] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const setMenu = (value) => {
    setSelectedMenu(value);
  };

  const setListSize = () => {
    setIsDrawerMin(!isDrawerMin);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header setListSize={setListSize} />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-sideNav">
          <SideNavbar
            isDrawerMin={isDrawerMin}
            selectedMenu={selectedMenu}
            setSelectedMenu={setMenu}
          />
        </div>
        <div className="dashboard-details">
          {selectedMenu === "Dashboard" && <SimpleCard />}
          {selectedMenu === "Manage Organizations" && <ManageOrg />}
          {selectedMenu === "Customers" && <Customer />}
          {selectedMenu === "Vendors" && <Vendor />}
          {selectedMenu === "Brands" && <Brands />}
          {selectedMenu === "Cities" && <Cities />}
          {selectedMenu === "GST Treatments" && <GST_Tratment />}
          {selectedMenu === "Payment Terms" && <Payment_terms />}
          {selectedMenu === "Salutations" && <Salutations />}
          {selectedMenu === "States" && <States />}
          {selectedMenu === "Tax Preference" && <TaxPreference />}
          {selectedMenu === "Units" && <Units />}

          {selectedMenu === "Bill Sundries" && <BillSundries />}
          {selectedMenu === "Category" && <Category />}
          {selectedMenu === "Countries" && <Country />}
          {selectedMenu === "Currencies" && <Currencies />}
          {selectedMenu === "Item Groups" && <Items />}
          {selectedMenu === "Manufacturers" && <Manufactures />}
          {selectedMenu === "Taxes" && <Taxes />}
          {selectedMenu === "Voucher Types" && <Voucher />}
          {selectedMenu === "Warehouses" && <Warehouse />}
          {selectedMenu === "Organizations" && <Org />}
          {selectedMenu === "Users" && <Users />}
          {selectedMenu === "Purchase Refund" && <PurchaseRefund />}
          {selectedMenu === "Purchase Payment" && <Payment />}
          {selectedMenu === "Sales Recipt" && <Recipt />}
          {selectedMenu === "Sales Refund" && <Refund />}






          
          
          {selectedMenu === "Delivery Note" && <DeliveryNote />}
          {selectedMenu === "Indent Order" && <IndentOrder />}
          {selectedMenu === "Purchase Invoice" && <PurchaseInvoice />}
          {selectedMenu === "Purchase Order" && <PurchaseOrder />}
          {selectedMenu === "Purchase Return" && <PurchaseReturn />}
          {selectedMenu === "Recipt Note" && <ReceiptNote />}
          {selectedMenu === "Sales Invoice" && <SalesInvoice />}
          {selectedMenu === "Sales Order" && <SalesOrder />}
          {selectedMenu === "Sales Return" && <SalesReturn />}
          {selectedMenu === "Stock Transfer" && <StockTransfer />}
        </div>


      </div>
    </div>
  );
};

export default DashBoard; 
