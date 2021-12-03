import React from 'react'
import Experience from '../Components/Experience'
import '../styles/styles.css'

export default function About() {
    return (
        <div className="aboutmain">
            <div className="container">
            <h1 className="text-center text-capitalize text-white my-1">Get to know me</h1>
            <div className="card my-5 mb-5">
            
                <p className="text-center justify-content-center align-center my-2 blackquote card-body">
                I have previous work experience as a direct sales agent. My exposure with SAP ERP system started with my promotion to head 
                cashier where I used SAP Material Management to manage stock. My understanding of basic System testing started when I worked
                 as sales support for Telkom. Part of my duties were working on CMSS for back-office support, CRM end-user testing before system 
                 is deployed to direct stores, Testing user manuals (BPIs) and offering CRM system training to agents.
                 My Passion for System analysis has grown due to projects I have worked on during my school career.

                 It is my believe that a good Business analyst can assist an organization in choosing the right software and business process/practices
                  that will allow any organization to fast-track their processes and keep track of financial operations.
                </p>

                <p className="text-center justify-content-center align-center my-2 blackquote">
                Thabang Reneilwe Mogane
                Cnr Samrand Ave & Watercress, 4843 Summerfields Estate, Centurion, Pretoria<br/>
                <a href="maitto:t.r.lelaka2009@gmail.com">Email: t.r.lelaka2009@gmail.com</a> <br/>
                Cell Phone: +27 71 851 1076

                </p>
                
            </div>

            <div className="card my-5">
                <div className="card-header">
                    <h1 className="text-center blackquote">My Experience</h1>
                </div>
                <div className="card-body">
                    <Experience company={"Telkom"} startdate={'01/10/ 2008'} enddate={'30/12/2012'} workedas={'Support Sales Agent'} 
                        responsibilities={"CRM application testing - testing of completed sales system Preparation of system training manuals Provide feedback on bugs and system usability Pull data from Business Warehouse to create weekly sales reports Inventory management for Telkom Direct stores including good ordering, scraping of returned items, shortages through SAP MM End of day banking and balancing Direct Sales Agent"}
                    />
                    <div class="row">
                        <div class="col"><hr/></div>
                        <div class="col-auto">And</div>
                        <div class="col"><hr/></div>
                    </div>
                    
                    <Experience company={"ABSA VAF"} startdate={'01/05/20208'} enddate={'30/09/2008'} workedas={'Repossession'} 
                        responsibilities={"Responsibility: Preparation of legal documents for repossession of vehicles financed by ABSA Bank"}
                    />
                    <div class="row">
                        <div class="col"><hr/></div>
                        <div class="col-auto">And</div>
                        <div class="col"><hr/></div>
                    </div>

                    <Experience company={"ABSA"} startdate={'01/08/2007'} enddate={'30/04/2008'} workedas={' Outbound Sales Agent'} 
                        responsibilities={"Credit card sales"}
                    />
                    <div class="row">
                        <div class="col"><hr/></div>
                        <div class="col-auto">And</div>
                        <div class="col"><hr/></div>
                    </div>
                </div>
                <div className="card-footer mb-5">
                    <h3 className="text-center font-it text-italic">More To Come</h3>
                </div>
                
            </div>
        </div>
        </div>
    )
}
