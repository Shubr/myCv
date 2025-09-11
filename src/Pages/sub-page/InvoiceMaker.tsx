import './InvoiceMaker.css';
import addIcon from '/assets/icons/addIcon.svg';
import refreshIcon from '/assets/icons/refreshIcon.svg';
import {usePDF} from 'react-to-pdf';

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
                        <div className="work-info">
                            <div className="headings">
                                <h2>Description</h2>
                                <h2>Qty</h2>
                                <h2>Unit Price</h2>
                                <h2>Total(excl. GST)</h2>
                            </div>
                            <hr/>
                            <div className="items">
                                <input placeholder="Hours Worked"/>
                                <input placeholder="9.0" id="qty"/>
                                <input placeholder="45.00" id="u-price"/>
                                <p>$</p>
                            </div>
                        <button><img src={addIcon}/></button>
                        </div>
                        <hr/>
                        <div className="footer-info">
                                <h4>Subtotal (excl GST)</h4>
                                <p>$405.00</p>
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
    for(let i = 0; i<=borderedElement.length; i++){
        borderedElement[i].style.border = "none";
    }
    
}

function calRate(){
    const quntatiy = document.getElementById("qty") as HTMLInputElement;
    const uPrice = document.getElementById("u-price") as HTMLInputElement;

    uPrice.addEventListener('input',()=>{
        if(uPrice.value.trim() !== ''){
            console.log("fill");
        }
    })
}
