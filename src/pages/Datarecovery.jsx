import "../assets/css/datarecovery.css";
import recoveryImg from "../assets/images/datarecovery/data-recovery.jpeg";

function Datarecovery() {
    return (
        <>

            <div className="dataRecoveryWrapper py-4 py-md-5 ps-2 ps-md-0 pe-2 pe-md-0">

                <div className="containerBox">

                    {/* ===== Header ===== */}
                    <div className="headerSection">

                        <h2 className="mainTitle">
                            Strategic Data Recovery Roadmap
                        </h2>
                        <div className="section-divider mb-4"></div>

                        <div className="subTitle">
                            At Vertex Computech, we understand that your data is your most valuable asset.
                            Our recovery workflow is engineered to maximize retrieval success while ensuring absolute security.
                        </div>

                    </div>

                    {/* ===== Roadmap Section ===== */}
                    <div className="roadmapSection">

                        <div className="roadColumn">

                            <div className="stepItem">
                                <div className="stepHeading">Initial Device Assessment</div>
                                <div className="stepText">
                                    Safely submit your storage media—HDDs, SSDs, or Flash drives—at our Kothrud-based lab.
                                    We begin with a secure intake process to document the hardware status.
                                </div>
                            </div>

                            <div className="stepItem">
                                <div className="stepHeading">Deep Diagnostic Evaluation</div>
                                <div className="stepText">
                                    Our certified engineers conduct a comprehensive forensic analysis to determine
                                    if the failure is logical or physical, providing you with a transparent recovery roadmap.
                                </div>
                            </div>

                            <div className="stepItem">
                                <div className="stepHeading">Advanced Retrieval Operations</div>
                                <div className="stepText">
                                    Utilizing cutting-edge Data Extraction tools, we navigate corrupted file systems
                                    and damaged sectors to reconstruct your lost information with surgical precision.
                                </div>
                            </div>

                        </div>

                        <div className="roadDivider"></div>

                        <div className="roadColumn">

                            <div className="stepItem">
                                <div className="stepHeading">Data Integrity Verification</div>
                                <div className="stepText">
                                    We don't just recover; we validate. You are invited to review the restored directory structure
                                    to confirm the accuracy and completeness of your files.
                                </div>
                            </div>

                            <div className="stepItem">
                                <div className="stepHeading">Secure Finalization</div>
                                <div className="stepText">
                                    Our billing is success-based. You proceed with the payment only after we have successfully verified your recovered data.
                                </div>
                            </div>

                            <div className="stepItem">
                                <div className="stepHeading">Encrypted Data Restitution</div>
                                <div className="stepText">
                                    Your data is returned via an encrypted transfer or your preferred storage medium,
                                    ensuring it remains confidential from our lab to your hands.
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ===== Image + Advantage Section ===== */}
                <div className="imageOverlaySection">

                    <div className="imageSide">
                        <img
                            src={recoveryImg}
                            alt="Professional Data Recovery Service"
                        />
                    </div>

                    <div className="contentSide">

                        <div className="advTitle">
                            The Vertex Computech Advantage
                        </div>

                        <div className="advItem">
                            Engineering-Led Solutions: Managed by a qualified computer engineer, ensuring a higher success rate for complex cases.
                        </div>

                        <div className="advItem">
                            Enterprise-Grade Security: We follow strict non-disclosure protocols to keep your personal and corporate data 100% private.
                        </div>

                        <div className="advItem">
                            High-Success Logic Board Repair: We can often recover data from dead MacBooks or laptops by repairing the hardware first.
                        </div>

                        <div className="advItem">
                            Modern Lab Facility: Equipped with the latest tools to handle "impossible" recovery scenarios.
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Datarecovery;