import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Home from "../components/Home";
import WhoWeAreAndOffer from "../components/WhoWeAreAndOffer";
import SapServices from "../components/SapServices";
import OpportunitiesAndTraining from "../components/OpportunitiesAndTraining";
import InternalProducts from "../components/InternalProducts";
import ResourcingAndConsultingSection from "../components/ResourcingAndConsultingSection";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            el?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <section id="home"><Home /></section>
            <section id="whoweareandoffer"><WhoWeAreAndOffer /></section>
            <section id="sap"><SapServices /></section>
            <section id="opportunities"><OpportunitiesAndTraining /></section>
            <section id="products"><InternalProducts /></section>
            <section id="resource"><ResourcingAndConsultingSection /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="contact"><ContactUs /></section>
        </>
    );
};

export default LandingPage;
