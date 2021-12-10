  const daronLordDmg = (fire) => {
      const minDmg = 20;
      const {fireDmg} = fire
      const dragonLordDmg = Math.floor((Math.random() * (fireDmg - minDmg + 1) + minDmg));
        return dragonLordDmg
    }
