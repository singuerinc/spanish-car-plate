const assert = require("assert");
const { getProvince } = require("../dist/index");

describe("#getProvince", () => {
  describe("invalid", () => {
    describe("old plates only", () => {
      it("should work only with old plates", () => {
        assert.equal(getProvince("1234BCD"), null);
      });
    });

    describe("unknown province", () => {
      it("should not work with unknown code", () => {
        assert.equal(getProvince("D1234BL"), null);
      });
    });
  });

  describe("valid", () => {
    it("should get Province of Alicante", () => {
      assert.equal(getProvince("A 1234 BL"), "Province of Alicante");
    });

    it("should get Province of Albacete", () => {
      assert.equal(getProvince("AB 1234 BL"), "Province of Albacete");
    });

    it("should get Province of Almería", () => {
      assert.equal(getProvince("AL 1234 BL"), "Province of Almería");
    });

    it("should get Province of Ávila", () => {
      assert.equal(getProvince("AV 1234 BL"), "Province of Ávila");
    });

    it("should get Province of Barcelona", () => {
      assert.equal(getProvince("B 1234 BL"), "Province of Barcelona");
    });

    it("should get Province of Badajoz", () => {
      assert.equal(getProvince("BA 1234 BL"), "Province of Badajoz");
    });

    it("should get Bilbao", () => {
      assert.equal(getProvince("BI 1234 BL"), "Bilbao");
    });

    it("should get Province of Burgos", () => {
      assert.equal(getProvince("BU 1234 BL"), "Province of Burgos");
    });

    it("should get Province of A Coruña", () => {
      assert.equal(getProvince("C 1234 BL"), "Province of A Coruña");
    });

    it("should get Province of Cádiz", () => {
      assert.equal(getProvince("CA 1234 BL"), "Province of Cádiz");
    });

    it("should get Province of Cáceres", () => {
      assert.equal(getProvince("CC 1234 BL"), "Province of Cáceres");
    });

    it("should get Ceuta", () => {
      assert.equal(getProvince("CE 1234 BL"), "Ceuta");
    });

    it("should get Province of Córdoba", () => {
      assert.equal(getProvince("CO 1234 BL"), "Province of Córdoba");
    });

    it("should get Province of Ciudad Real", () => {
      assert.equal(getProvince("CR 1234 BL"), "Province of Ciudad Real");
    });

    it("should get Castelló", () => {
      assert.equal(getProvince("CS 1234 BL"), "Castelló");
    });

    it("should get Province of Cuenca", () => {
      assert.equal(getProvince("CU 1234 BL"), "Province of Cuenca");
    });

    it("should get Bioko", () => {
      assert.equal(getProvince("FP 1234 BL"), "Bioko");
    });

    it("should get Province of Las Palmas", () => {
      assert.equal(getProvince("GC 1234 BL"), "Province of Las Palmas");
    });

    it("should get Gerona (Girona)", () => {
      assert.equal(getProvince("GE 1234 BL"), "Gerona (Girona)");
    });

    it("should get Province of Girona", () => {
      assert.equal(getProvince("GI 1234 BL"), "Province of Girona");
    });

    it("should get Province of Granada", () => {
      assert.equal(getProvince("GR 1234 BL"), "Province of Granada");
    });

    it("should get Province of Guadalajara", () => {
      assert.equal(getProvince("GU 1234 BL"), "Province of Guadalajara");
    });

    it("should get Province of Huelva", () => {
      assert.equal(getProvince("H 1234 BL"), "Province of Huelva");
    });

    it("should get Province of Huesca", () => {
      assert.equal(getProvince("HU 1234 BL"), "Province of Huesca");
    });

    it("should get Ifni", () => {
      assert.equal(getProvince("IF 1234 BL"), "Ifni");
    });

    it("should get Province of Jaén", () => {
      assert.equal(getProvince("J 1234 BL"), "Province of Jaén");
    });

    it("should get Province of Lleida", () => {
      assert.equal(getProvince("L 1234 BL"), "Province of Lleida");
    });

    it("should get Province of León", () => {
      assert.equal(getProvince("LE 1234 BL"), "Province of León");
    });

    it("should get Logroño", () => {
      assert.equal(getProvince("LO 1234 BL"), "Logroño");
    });

    it("should get La Rioja", () => {
      assert.equal(getProvince("LR 1234 BL"), "La Rioja");
    });

    it("should get Province of Lugo", () => {
      assert.equal(getProvince("LU 1234 BL"), "Province of Lugo");
    });

    it("should get Community of Madrid", () => {
      assert.equal(getProvince("M 1234 BL"), "Community of Madrid");
    });

    it("should get Province of Málaga", () => {
      assert.equal(getProvince("MA 1234 BL"), "Province of Málaga");
    });

    it("should get Melilla", () => {
      assert.equal(getProvince("ML 1234 BL"), "Melilla");
    });

    it("should get Region of Murcia", () => {
      assert.equal(getProvince("MU 1234 BL"), "Region of Murcia");
    });

    it("should get Navarre", () => {
      assert.equal(getProvince("NA 1234 BL"), "Navarre");
    });

    it("should get Oviedo", () => {
      assert.equal(getProvince("O 1234 BL"), "Oviedo");
    });

    it("should get Province of Ourense", () => {
      assert.equal(getProvince("OU 1234 BL"), "Province of Ourense");
    });

    it("should get Province of Palencia", () => {
      assert.equal(getProvince("P 1234 BL"), "Province of Palencia");
    });

    it("should get Palma, Majorca", () => {
      assert.equal(getProvince("PM 1234 BL"), "Palma, Majorca");
    });

    it("should get Province of Pontevedra", () => {
      assert.equal(getProvince("PO 1234 BL"), "Province of Pontevedra");
    });

    it("should get Rio Muni", () => {
      assert.equal(getProvince("RM 1234 BL"), "Rio Muni");
    });

    it("should get Santander", () => {
      assert.equal(getProvince("S 1234 BL"), "Santander");
    });

    it("should get Province of Salamanca", () => {
      assert.equal(getProvince("SA 1234 BL"), "Province of Salamanca");
    });

    it("should get Province of Seville", () => {
      assert.equal(getProvince("SE 1234 BL"), "Province of Seville");
    });

    it("should get Province of Segovia", () => {
      assert.equal(getProvince("SG 1234 BL"), "Province of Segovia");
    });

    it("should get Province of Soria", () => {
      assert.equal(getProvince("SO 1234 BL"), "Province of Soria");
    });

    it("should get Donostia", () => {
      assert.equal(getProvince("SS 1234 BL"), "Donostia");
    });

    it("should get Province of Tarragona", () => {
      assert.equal(getProvince("T 1234 BL"), "Province of Tarragona");
    });

    it("should get Province of Teruel", () => {
      assert.equal(getProvince("TE 1234 BL"), "Province of Teruel");
    });

    it("should get Province of Santa Cruz de Tenerife", () => {
      assert.equal(getProvince("TF 1234 BL"), "Province of Santa Cruz de Tenerife");
    });

    it("should get Province of Toledo", () => {
      assert.equal(getProvince("TO 1234 BL"), "Province of Toledo");
    });

    it("should get Province of Valencia", () => {
      assert.equal(getProvince("V 1234 BL"), "Province of Valencia");
    });

    it("should get Province of Valladolid", () => {
      assert.equal(getProvince("VA 1234 BL"), "Province of Valladolid");
    });

    it("should get Vitoria", () => {
      assert.equal(getProvince("VI 1234 BL"), "Vitoria");
    });

    it("should get Province of Zaragoza", () => {
      assert.equal(getProvince("Z 1234 BL"), "Province of Zaragoza");
    });

    it("should get Province of Zamora", () => {
      assert.equal(getProvince("ZA 1234 BL"), "Province of Zamora");
    });
  });
});
