document.addEventListener('DOMContentLoaded', (event) => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });

  tl.to('.backgroundImage', {
    opacity: 1,
    duration: 0.8,
  })
    .to(
      '.footerText1',
      {
        opacity: 1,
        duration: 0.6,
      },
      '-=0.2'
    )
    .to(
      '.footerLogo',
      {
        opacity: 1,
        duration: 0.6,
      },
      '<'
    )
    .to(
      '.mainBurgerWrapper',
      {
        left: 0,
        opacity: 1,
        duration: 0.75,
      },
      '-=0.4'
    )
    .to(
      '.headerText1',
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 0.55,
      },
      '-=0.4'
    )
    .to('.headerText2', {
      opacity: 1,
      duration: 0.55,
    })
    .to('.headerDiv', {
      opacity: 0,
      delay: 0.7,
    })
    .to('.XIcon', {
      opacity: 1,
      rotate: 360,
      scale: 1,
      duration: 0.65,
    })
    .to(
      '.mce_treme',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.5,
        ease: 'power2.inOut',
      },
      '-=0.4'
    )
    .to('.stroerer', {
      duration: 0.9,
      ease: 'bounce.out',
      clipPath: 'circle(11% at 21.5% 30.5%)',
    })
    .to(
      '.roudedDiv1',
      {
        duration: 0.85,
        clipPath: 'circle(120% at 50% 100%)',
      },
      '+=0.5'
    )
    .to(
      '.roudedDiv2',
      {
        duration: 0.85,
        clipPath: 'circle(120% at 50% 100%)',
      },
      '-=0.6'
    )
    .to(
      '.roudedDiv3',
      {
        duration: 0.9,
        opacity: 1,
        clipPath: 'circle(120% at 50% 50%)',
      },
      '-=0.6'
    )
    .to(
      '.roundedDiv4',
      {
        duration: 0.9,

        clipPath: 'circle(120% at 50% 50%)',
      },
      '-=0.6'
    )
    .to('.Logo', {
      duration: 1,

      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    })
    .to(
      '.mcextremeMiddleLogo',
      {
        duration: 1,

        opacity: 1,
      },
      '+=0.1'
    )
    .to(
      ['.Logo', '.mcextremeMiddleLogo', '.footerText1'],
      {
        delay: 0.9,
        duration: 0.8,

        opacity: 0,
      },
      '+=1'
    );
});
