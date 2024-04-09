import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import classes from './GuestLayout.module.css'
import {FaFacebook, FaInstagram, FaTwitter,} from 'react-icons/fa';
import { FaPhoneVolume, FaRegEnvelope, FaWhatsapp, FaIdBadge, FaSquareWhatsapp  } from "react-icons/fa6";
import Logo from '@/Pages/ESPE.png'
import Slider from '@/Layouts/Slider'

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div 
        // className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
        >
            <div className={classes.guestheader} >
                {/* <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link> */}
                <div className={classes.guestheadfirstbar}>
                    <div className={classes.guestheadfirstbaricons} >
                        <div className={classes.baricons}>
                            <FaFacebook/>
                        </div>
                        <div className={classes.baricons}>
                            <FaInstagram/>
                        </div>
                        <div className={classes.baricons}>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>
                <div className={classes.guestsecondbar}>
                    <div className={classes.secondbarcontent}>
                        <div className={classes.secondbarlogo}><img src={Logo} alt="" /></div>
                        <div className={classes.secondbaricons}>
                        <div className={classes.secondicons} onClick={() => window.open('https://api.whatsapp.com/send?phone=2250748349493', '_blank')}>
                                <div className={classes.secondicons1}><FaPhoneVolume /></div>
                                <div>
                                    <h2>Appellez-nous</h2>
                                    <span>+225 07  48 35 94 93</span>
                                </div>
                            </div>
                            <div className={classes.secondicons} onClick={() => window.open('mailto:esspe@inphb.ci')}>
                                <div className={classes.secondicons1}><FaRegEnvelope /></div>
                                <div>
                                    <h2>Ecrivez-nous</h2>
                                    <span>escpe@inphb.ci</span>
                                </div>
                                
                            </div>
                            <div className={classes.secondiconsbg} onClick={() => window.open('https://etudiants.ent.inphb.app/', '_blank')}>
                                <div className={classes.secondicons1}><FaIdBadge style={{color: '#fff'}}  /></div>
                                <div>
                                    <h2>Espace étudiants</h2>
                                    <span>se connecter</span>
                                </div>
                            </div>

                            <div className={classes.secondiconsphone} onClick={() => window.open('https://api.whatsapp.com/send?phone=2250748349493', '_blank')}>
                                <div className={classes.secondiconsphone1}><FaSquareWhatsapp /></div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <section className={classes.navsection}>
                <div className={classes.fourthbar}><Slider /></div>
                    <div className={classes.thirdbar}></div>
                </section>

            </div>

            <div >
                {children}
            </div>
        </div>
    );
}
