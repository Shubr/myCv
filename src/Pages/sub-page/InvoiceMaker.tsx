import './InvoiceMaker.css';
import addIcon from '/assets/icons/addIcon.svg';
import refreshIcon from '/assets/icons/refreshIcon.svg';
import {usePDF} from 'react-to-pdf';

let subTotal = 0;

export default function MakeInvoice(){

    const {toPDF, targetRef}= usePDF({filename:'invoice.pdf'});

    function exportInvoice(){
        clearBorder();
        toPDF();
    }
    return(
        <>
        <title>Invoice Creator</title>
            <div className="invoice-container">
                <div className="title">
                    <h1>Create Invoice</h1>
                    <p>Get that money</p>
                </div>
                <div className="main-container">
                    <div className="outline">
                    <div id="invoice-preview" ref={targetRef}>
                        <div className="headers">
                            <h1>INVOICE</h1>
                            <input placeholder="John" id='name'/>
                            <input placeholder="101 High Street" id="street"/>
                            <input placeholder="Bulls, 4818" id="city"/>
                            <input placeholder="New Zealand" id="country"/>
                        </div>
                        <hr/>
                        <div className="invoice-info">
                            <div className="company">
                                <input placeholder="The Warehouse"/>
                                <input placeholder="101 Kimbolton Road, Feilding 4702"/>
                            </div>
                            <div className="invoice-details">
                                <div>
                                    <h2>Invoice Number:</h2>
                                    <input placeholder="INV-11111"/>
                                </div>
                                <div>
                                    <p>Invoice Date:</p>
                                    <input placeholder="07-10-2025"/>
                                </div>
                                <div>
                                    <p>Payment Due:</p>
                                    <input placeholder="07-11-2025"/>
                                </div>
                                <br/>
                                <div>
                                    <p>Period-Start:</p>
                                    <input placeholder="05-10-2025"/>
                                </div>
                                <div>
                                    <p>Period-End:</p>
                                    <input placeholder="06-10-2025"/>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div id="work-info">
                            <div className="headings">
                                <h2>Description</h2>
                                <h2>Qty</h2>
                                <h2>Unit Price</h2>
                                <h2>Total(excl. GST)</h2>
                            </div>
                            <hr/>
                            <div id="item-container">
                                <div className="items">
                                <input placeholder="Hours Worked" id="description"/>
                                <input placeholder="9.0" id="qty" name="qty"/>
                                <input placeholder="45.00" id="unit-price"/>
                                <p id="total-price">$</p>
                            </div>
                            </div>
                        <button id="add-item" onClick={()=>{
                            addItem()
                        }}><img src={addIcon}/></button>
                        </div>
                        <hr/>
                        <div className="footer-info">
                                <h4>Subtotal (excl GST)</h4>
                                <p id="sub-total">${subTotal}</p>
                        </div>
                        <hr/>
                        <div className="bottom-container">
                            <div className="bank-details">
                                <br/>
                                <h2>Please make payment to</h2>
                                <div>
                                    <p>Account Name:</p>
                                    <input/>
                                </div>
                                <div>
                                    <p>Account Number:</p>
                                    <input/>
                                </div>
                                <div>
                                    <p>When paying, please use the reference: </p>
                                    <input/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>

                    <div className="button-container">
                        <button onClick={()=>
                            exportInvoice()
                            }>Export</button>
                        <button onClick={()=>{
                            window.location.reload();
                        }}><img src={refreshIcon}/></button>
                    </div>
                </div>
            </div>
        </>
    )
}


function clearBorder(){
    const borderedElement = document.getElementsByTagName("input");
    const addItemButton = document.getElementById("add-item");
    const description = document.getElementById("description") as HTMLInputElement;
    const qty = document.getElementById("qty") as HTMLInputElement;
    const uPrice = document.getElementById("unit-price") as HTMLInputElement;
    const totalPrice = document.getElementById("total-price") as HTMLElement;

    for(let i = 0; i<=borderedElement.length-1; i++){
        borderedElement[i].style.border = "none";
    }
    if (addItemButton) {
        addItemButton.style.display = "none";
    }
    description.style.display = "none";
    qty.style.display= "none";
    uPrice.style.display = "none";
    totalPrice.style.display = "none";
}

function addItem(){
    const itemContainer = document.getElementById("item-container") as HTMLElement;
    const description = document.getElementById("description") as HTMLInputElement;
    const qty = document.getElementById("qty") as HTMLInputElement;
    const uPrice = document.getElementById("unit-price") as HTMLInputElement;

    const items =  document.createElement("div");
    items.className = "items";

    const descrip_p = document.createElement("p");
    // descrip_p.id = "description"
    descrip_p.textContent = description.value;

    const qty_p = document.createElement("p");
    // qty_p.id = "qty";
    qty_p.textContent = qty.value;

    const unitPrice_p = document.createElement("p");
    // unitPrice_p.id = "unit-price"
    unitPrice_p.textContent = uPrice.value;

    const total = document.createElement("p");
    total.textContent = ("$"+parseInt(qty.value)*parseInt(uPrice.value)).toString();


    items.appendChild(descrip_p);
    items.appendChild(qty_p);
    items.appendChild(unitPrice_p);
    items.appendChild(total);
    itemContainer.prepend(items);
    
    subTotal += parseInt(qty.value) * parseInt(uPrice.value)

    const subTotals = document.getElementById("sub-total") as HTMLElement;
    subTotals.textContent = `$${subTotal}`;
}