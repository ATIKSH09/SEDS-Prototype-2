import Navbar from "./components/Navbar";
import Divleft from "./components/Divleft";
import Divright from "./components/Divright";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div div className=" bg-[#EEEEE6] pt-[15vh] sm:pb-[15vh] pb-[3vh] ">
          {/* Huperion starts */}
          <Divleft
            url="https://imgs.search.brave.com/aC8dQtED2z4Gh3kcrvM7BCzwFAyv1yUsyKOz-7JpXlE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2Y0L0Vz/dGN1YmUtMV8yMDEy/LTEyLTI3LmpwZy82/NDBweC1Fc3RjdWJl/LTFfMjAxMi0xMi0y/Ny5qcGc"
            title="Hyperion"
            desc="the CubeSat
        team of BPHC. The team plans to accomplish something as ambitious as
        building a CubeSat, which is someday actually going to make its ride
        to the space, sitting as a secondary payload on an ISRO PSLV. With
        just 13 universities across the country that have managed to put a
        student-made satellite on LEO, we aspire to put BITS Pilani on this
        list someday."
          />
        </div>
        {/* hyperion ends */}

        {/* janus starts */}

        <Divright
          url="https://imgs.search.brave.com/FckNhb-kJwC_H-WMAlRQ10szHjPuVilaqjszhHC9z_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzU0LzQ2Lzkz/LzM2MF9GXzM1NDQ2/OTMzNV9jVW1KV2JS/bEczRGlDNEllTzk4/Umhla3ZKZ3JkQ0VZ/Zi5qcGc"
          title="Janus"
          desc="BITS Hyderabad’s CanSat Team. We participate on an international scale at the CanSat Competition held by the American Astronautical Society annually in Virginia, USA. Moving forward, we would also be participating in the CanSat Competition held by IN-SPACe. 
        Our two main subsystems are Avionics and Structures. "
        />
        {/* janus ends */}

        {/* artemis starts */}

        <Divleft
          url="https://imgs.search.brave.com/NT9I_m0-_Ys4K1jzmnzpVyQoF_fruBXsJADy7fFZjpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA3/NjA0OTg4OC9waG90/by9yb2NrZXQtbGF1/bmNoLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1SWWhSQzg1/ZTNZM3hCUi1lS2o5/dWNualI1NUFKMlQz/engzUTQ1NWk4N1I4/PQ"
          title="Artemis"
          desc="BPHC's own model rocketry team. We work on building indigenous model rockets and mainly have two divisions Avionics and Structures."
        />

        {/* artemis ends */}
        {/* arcangel starts */}

        {/* arcangel ends */}
        {/* </div> */}
        <Divright
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Armadillo_Aerospace_Pixel_Hover.jpg/1280px-Armadillo_Aerospace_Pixel_Hover.jpg"
          title="Archangel"
          desc="deals primarily with Research and Development (R&D). Key focus areas of this division include research on propulsive materials and fuels, and requisites for solid rocket propulsion and hybrid rocket propulsion systems"
        />
      </div>
    </>
  );
}

export default App;
