import {useEffect} from "react";
import {
  P_SSI,
  PP_AAIW,
  PP_AIC_PIF,
  PP_AN,
  PP_BIGFM,
  PP_GG,
  PP_IMJ,
  PP_ME,
  PP_MS,
  PP_MTCF, PP_ODE, PP_PE, PP_RM, PP_SG, PP_SM, PP_SW, PP_VI,
  PP_YD,
} from "../../Utils/images";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Box, Center, Flex, Heading, Image, VStack} from "@chakra-ui/react";
import {FadingDivider} from "../About";

export default function Sponsors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-2 m-auto">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container-fluid">
        <Center>
          <Heading>
            Our Sponsors
          </Heading>
        </Center>
        <br/>
        <FadingDivider/>
        <Flex justify="space-evenly" alignItems="center">
          <div className="present-sponsor-head sponsor-head">
            <Center>
              <Heading size="lg">
                Present Sponsor
              </Heading>
            </Center>
            <br/>
            <Center>
              <Box boxShadow="2xl" borderRadius="lg" p={4}>
                <br/><br/><br/>
                <Image src={P_SSI} alt="SSI" title="SSI" objectFit="cover"/>
                <br/><br/><br/>
                <Center>
                  <Heading size="md">SSI</Heading>
                </Center>
              </Box>
            </Center>
          </div>
          <div className="knowledge-sponsor-head sponsor-head">
            <Center>
              <Heading size="lg">
                Knowledge Partner
              </Heading>
            </Center>
            <br/>
            <Center>
              <Box boxShadow="2xl" borderRadius="lg" p={4}>
                <br/><br/><br/>
                <Image src={PP_AAIW} alt="AAI Way" width="250px" title="AAI Way" objectFit="cover"/>
                <br/><br/><br/>
                <Center>
                  <Heading size="md">AAI Way</Heading>
                </Center>
              </Box>
            </Center>
          </div>
        </Flex>
        <br/>
        <br/>
        <div className="Past-Sponsors past-sponsor-head sponsor-head">
          <Heading>
            Past Sponsors
          </Heading>
          <div className="row past-sponsor-list">

            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Yellow Diamond">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal"
                   data-target=".YellowDiamond">
                <img className="Past-Partner-Logo" src={PP_YD} alt="yeldimnd"/>
                <h5 className="past-sponsor-name text">Yellow Diamond</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="92.7 Big FM">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".BigFM">
                <img className="Past-Partner-Logo" src={PP_BIGFM} alt=""/>
                <h5 className="past-sponsor-name text">92.7 Big FM</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Anherb Natural">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".Anherb">
                <img className="Past-Partner-Logo" src={PP_AN} alt=""/>
                <h5 className="past-sponsor-name text">Anherb Natural</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3"
                 title="AIC - Prestige Inspire Foundation">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".Inspire">
                <img className="Past-Partner-Logo" src={PP_AIC_PIF} alt=""/>
                <h5 className="past-sponsor-name text">AIC - Prestige Inspire Foundation</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-xs-6 col-sm-6 col-lg-4 col-xl-3" title="Gold's Gym">
              <div className="past-sponsor-content sponsor-view round-logo ListView" data-toggle="modal"
                   data-target=".GoldsGym">
                <img className="Past-Partner-Logo" src={PP_GG} alt=""/>
                <h5 className="past-sponsor-name text">Gold's Gym</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Indore Meri Jaan">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal"
                   data-target=".IndoreMeriJaan">
                <img className="Past-Partner-Logo" src={PP_IMJ} alt=""/>
                <h5 className="past-sponsor-name text">Indore Meri Jaan</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Made Easy">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".MadeEasy">
                <img className="Past-Partner-Logo" src={PP_ME} alt=""/>
                <h5 className="past-sponsor-name text">Made Easy</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Manoj's Unisex Salon">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".MUSalon">
                <img className="Past-Partner-Logo" src={PP_MS} alt=""/>
                <h5 className="past-sponsor-name text">Manoj's Unisex Salon</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Mezzanine - The Coffee Floor">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".Mezzanine">
                <img className="Past-Partner-Logo" src={PP_MTCF} alt=""/>
                <h5 className="past-sponsor-name text">Mezzanine - The Coffee Floor</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="ODE Collection">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".ODE">
                <img className="Past-Partner-Logo" src={PP_ODE} alt=""/>
                <h5 className="past-sponsor-name text">ODE Collection</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Pizza Express">
              <div className="past-sponsor-content sponsor-view ListView round-logo" data-toggle="modal"
                   data-target=".PizzaExpress">
                <img className="Past-Partner-Logo" src={PP_PE} alt=""/>
                <h5 className="past-sponsor-name text">Pizza Express</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Rolls Mania">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".RollsMania">
                <img className="Past-Partner-Logo" src={PP_RM} alt=""/>
                <h5 className="past-sponsor-name text">Rolls Mania</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-xs-6 col-sm-6 col-lg-4 col-xl-3" title="Shear Genius">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal"
                   data-target=".ShearGenius">
                <img className="Past-Partner-Logo" src={PP_SG} alt=""/>
                <h5 className="past-sponsor-name text">Shear Genius</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Sports World">
              <div className="past-sponsor-content sponsor-view round-logo ListView" data-toggle="modal"
                   data-target=".SportsWorld">
                <img className="Past-Partner-Logo" src={PP_SW} alt=""/>
                <h5 className="past-sponsor-name text">Sports World</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Study Metro">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".StudyMetro">
                <img className="Past-Partner-Logo" src={PP_SM} alt=""/>
                <h5 className="past-sponsor-name text">Study Metro</h5>
              </div>
            </div>
            <div className="text-center past-sponsor col-sm-6 col-lg-4 col-xl-3" title="Via Indore">
              <div className="past-sponsor-content sponsor-view ListView" data-toggle="modal" data-target=".ViaIndore">
                <img className="Past-Partner-Logo" src={PP_VI} alt=""/>
                <h5 className="past-sponsor-name text">Via Indore</h5>
              </div>
            </div>

          </div>
        </div>
        <footer>
          <div className="footer-contact text-center col-xs-10 col-md-11 col-lg-12">
            <a href="/#contact" className="sponsors-message text-decoration-none">
              <h6 className="message text-muted"> Want to Sponsor Us? Join our Community Now! <span id="clickpoint"
                                                                                                    style={{
                                                                                                      color: "rgba(0,0,0,.7)",
                                                                                                      textDecoration: "solid",
                                                                                                      fontWeight: 650,
                                                                                                    }}>Click Here </span>
                to drop us a message or share your interest, and we will get back to you shortly.
              </h6>
            </a>
          </div>
        </footer>
        <br/>
      </div>
    </div>
  );
}