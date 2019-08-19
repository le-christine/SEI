package com.generalassembly;

class DodgeRam implements Automobile, TowVehicle {
    // Methods that the Automobile interface needs:
    @Override
    public int getYear() {
        return 2019;
    }

    @Override
    public String getMake() {
        return "Dodge";
    }

    @Override
    public String getModel() {
        return "Ram";
    }

    @Override
    public void startEngine() {
        System.out.println("VROOM!");
    }

    // Methods that the TowVehicle class needs:
    @Override
    public int getCarryingCapacity() {
        return 2000;
    }

    @Override
    public int getTowingCapacity() {
        return 13000;
    }

    @Override
    public String getFuelType() {
        return "Diesel";
    }
}
