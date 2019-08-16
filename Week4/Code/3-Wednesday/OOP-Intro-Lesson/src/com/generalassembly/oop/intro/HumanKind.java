package com.generalassembly.oop.intro;

public class HumanKind {
    public static void main(String... args) {
        HumanKind vannaWhite = new HumanKind();
        vannaWhite.setId(123);
        vannaWhite.setName("Vanna White");
        vannaWhite.setAddress("123 Main St, Burbank, CA");

        HumanKind patSajak = new HumanKind();
        patSajak.setId(456);
        patSajak.setName("Pat Sajak");
        patSajak.setAddress("456 Elm St, New York, NY");

//        HumanKind vannaWhite = new HumanKind(123, "Vanna White", "123 Main St, Burbank, CA");
//        HumanKind patSajak = new HumanKind(456, "Pat Sajak", "123 Main St, Burbank, CA");
    }
    private int id;
    private String name;
    private String address;

    public HumanKind(){}

    public HumanKind(int id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
