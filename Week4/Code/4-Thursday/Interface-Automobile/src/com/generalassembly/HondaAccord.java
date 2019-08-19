package com.generalassembly;

public class HondaAccord implements Automobile {
    // Instance variable:
    private int year;
    // Constructor:
    public HondaAccord(int year) {
        this.year = year;
    }

    // Methods that the interface needs:
    @Override
    public int getYear() {
        return this.year;
    }

    @Override
    public String getMake() {
        return "Honda";
    }

    @Override
    public String getModel() {
        return "Accord";
    }

    @Override
    public void startEngine() {
        System.out.println("Vroom vroom!");
    }
}
