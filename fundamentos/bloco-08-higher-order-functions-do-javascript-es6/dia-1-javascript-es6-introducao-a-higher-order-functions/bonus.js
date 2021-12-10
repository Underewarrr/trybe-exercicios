  const daronLordDmg = (fire) => {
      const minDmg = 20;
      const {fireDmg} = fire
      const dragonLordDmg = Math.floor((Math.random() * (strength - fireDmg + 1) + minDmg));
        return dragonLordDmg
    }