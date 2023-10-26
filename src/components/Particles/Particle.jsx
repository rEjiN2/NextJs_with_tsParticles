"use client"
import {Particles} from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { loadFull } from "tsparticles"; // loads tsparticles
import React,{useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  // const options = useMemo(() => {
  //   // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
  //   // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
  //   return {
  //     background: {
  //       color: "#000", // this sets a background color for the canvas
  //     },
  //     fullScreen: {
  //       enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
  //       zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  //     },
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true, // enables the click event
  //           mode: "push", // adds the particles on click
  //         },
          // onHover: {
          //   enable: true, // enables the hover event
          //   mode: "repulse", // make the particles run away from the cursor
          // },
  //       },
        // modes: {
        //   push: {
        //     quantity: 10, // number of particles to add on click
        //   },
        //   repulse: {
        //     distance: 100, // distance of the particles from the cursor
        //   },
        // },
  //     },
      // particles: {
      //   links: {
      //     enable: true, // enabling this will make particles linked together
      //     distance: 200, // maximum distance for linking the particles
      //   },
      //   move: {
      //     enable: true, // enabling this will make particles move in the canvas
      //     speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
      //   },
      //   opacity: {
      //     value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
      //   },
      //   size: {
      //     value: { min: 1, max: 3 }, // let's randomize the particles size a bit
      //   },
      // },
  //   };
  // }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback(async(engine) => {
   await loadFull(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  const particlesLoaded = useCallback(async()=>{

  },[])


  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return(
    <Particles style={{width:'100%' , height:'100%' , position:'absolute' ,transform:'translateZ(0)'}}  id="tsparticles" init={particlesInit} loaded={particlesLoaded} 
    options={
      {
        fullScreen:{enable:true},
        background:{
          color:{
            value:''
          },
        },
        fpsLimit:60,
               interactivity: {
        events: {
          onClick: {
            enable: true, 
            mode: "push", 
          },
          onHover: {
            enable: true, 
            mode: "repulse",
          },
          resize:true,
      },
      modes: {
        push: {
          quantity: 100, 
        },
        repulse: {
          distance: 200, 
          duration:0.4,
        },
      },
    },
    particles: {
      color:{
        value:'#e68e2e'
      },
      links: {
        color:'#f5d393',
        enable: true, 
        distance: 150, 
        opacity: 0.9,
        width:1
       },

    collisions:{
      enable:true,
    },
    move:{
      directions:'none',
      enable:true,
      outModes:{
        default:'bounce'
      },
      random:false,
      speed:1,
      straight:false
    },
    number:{
      density:{
        enable:true,
        area:1000
      },
      value:100 
    },
    opacity:{
      value:0.5,
    },
    shape:{
      type:'triangle'
    },
    size:{
      value:{min:1,max:5}
    }
  },
  detectRetina:true
  // fpsLimit: 60,
  // particles: {
  //   number: {
  //     value: 0,
  //     density: {
  //       enable: true,
  //       value_area: 800
  //     }
  //   },
  //   color: {
  //     value: "#ff0000",
  //     animation: {
  //       enable: true,
  //       speed: 180,
  //       sync: true
  //     }
  //   },
  //   shape: {
  //     type: "circle",
  //     stroke: {
  //       width: 0,
  //       color: "#000000"
  //     },
  //     polygon: {
  //       nb_sides: 5
  //     },
  //     image: {
  //       src: "https://cdn.matteobruni.it/images/particles/github.svg",
  //       width: 100,
  //       height: 100
  //     }
  //   },
  //   opacity: {
  //     value: 0.5,
  //     random: false,
  //     anim: {
  //       enable: false,
  //       speed: 3,
  //       opacity_min: 0.1,
  //       sync: false
  //     }
  //   },
  //   size: {
  //     value: 50,
  //     random: {
  //       enable: true,
  //       minimumValue: 10
  //     },
  //     animation: {
  //       enable: true,
  //       speed: 5,
  //       minimumValue: 10,
  //       sync: true,
  //       startValue: "min",
  //       destroy: "max"
  //     }
  //   },
  //   links: {
  //     enable: false
  //   },
  //   move: {
  //     enable: true,
  //     speed: 10,
  //     direction: "none",
  //     random: false,
  //     straight: false,
  //     outMode: "destroy",
  //     attract: {
  //       enable: false,
  //       rotateX: 600,
  //       rotateY: 1200
  //     }
  //   }
  // },
  // interactivity: {
  //   detectsOn: "window",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "trail"
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "push"
  //     },
  //     resize: true
  //   },
  //   modes: {
  //     grab: {
  //       distance: 400,
  //       line_linked: {
  //         opacity: 1
  //       }
  //     },
  //     bubble: {
  //       distance: 400,
  //       size: 40,
  //       duration: 2,
  //       opacity: 0.8,
  //       speed: 3
  //     },
  //     repulse: {
  //       distance: 200
  //     },
  //     push: {
  //       particles_nb: 4
  //     },
  //     remove: {
  //       particles_nb: 2
  //     },
  //     trail: {
  //       delay: 0.005,
  //       quantity: 5
  //     }
  //   }
  // },
  // retina_detect: true,
  // background: {
  //   color: "#000000",
  //   image: "url('https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  //   position: "50% 50%",
  //   repeat: "no-repeat",
  //   size: "cover"
  // },
  // backgroundMask: {
  //   enable: true,
  //   cover: {
  //     color: "#000000"
  //   }
  // }


}
    }
    />
  )
};

export default ParticlesComponent;