  const daronLordDmg = (fire) => {
      const minDmg = 20;
      const {fireDmg} = fire
      const dragonLordDmg = Math.floor((Math.random() * (minDmg - fireDmg + 1) + minDmg));
        return dragonLordDmg
    }
