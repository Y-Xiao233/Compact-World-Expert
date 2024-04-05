//此部分代码及注释由落秋FalAut提供
//此段代码因为无法在玩家离开时运行被弃用
/*
const EnergyMax = 400000; //最大能量值
const EnergyToMana = 100; //能量转魔力时，魔力的量
CapabilityEvents.blockEntity((event) => {
  event.attach(
    "botania:mana_pool",
    CapabilityBuilder.ENERGY.customBlockEntity()
      //是否可以接收能量
      .canReceive(() => true)
      //接收能量的逻辑
      .receiveEnergy((be, amount, simulate) => {
        let energy = be.persistentData.getInt("energy");
        let received = Math.min(EnergyMax - energy, amount);
        if (!simulate) {
          be.persistentData.putInt("energy", energy + received);
        }

        return received;
      })
      //获取存储的能量
      .getEnergyStored((be) => {
        let energy = be.persistentData.getInt("energy");
        let mana = be.getCapability(BotaniaCapabilities.MANA_RECEIVER).orElse(null);

        //添加判断 防止电表倒转
        if (!mana.isFull() && energy >= 10 * EnergyToMana) {
          //接收魔力
          mana.receiveMana(EnergyToMana);
          //消耗能量
          //如果需要 能量1：魔力10 就 energy - 0.1 * EnergyToMana
          //如果需要 能量100：魔力1 就 energy - 100 * EnergyToMana
          be.persistentData.putInt("energy", energy - 10 * EnergyToMana);
        }
        return be.persistentData.getInt("energy");
      })
      //获取最大能量值
      .getMaxEnergyStored(() => EnergyMax)
  );
});
*/
