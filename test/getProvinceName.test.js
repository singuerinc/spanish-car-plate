const assert = require("assert");
const { getProvinceName } = require("../dist/index");

describe("#getProvinceName", () => {
  describe("invalid", () => {
    describe("old plates only", () => {
      it("should work only with old plates", () => {
        assert.equal(getProvinceName("1234BCD"), null);
      });
    });

    describe("unknown province", () => {
      it("should not work with unknown code", () => {
        assert.equal(getProvinceName("D1234BL"), null);
      });
    });

    describe("wrong input", () => {
      it("should return null with null", () => {
        assert.equal(getProvinceName(null), null);
      });

      it("should return null with undefined", () => {
        assert.equal(getProvinceName(undefined), null);
      });

      it("should return null with empty", () => {
        assert.equal(getProvinceName(""), null);
      });
    });
  });

  describe("valid", () => {
    it("should get Province of Alicante", () => {
      assert.equal(getProvinceName("A 1234 BL"), "Province of Alicante");
    });

    it("should get Province of Albacete", () => {
      assert.equal(getProvinceName("AB 1234 BL"), "Province of Albacete");
    });

    it("should get Province of Almería", () => {
      assert.equal(getProvinceName("AL 1234 BL"), "Province of Almería");
    });

    it("should get Province of Ávila", () => {
      assert.equal(getProvinceName("AV 1234 BL"), "Province of Ávila");
    });

    it("should get Province of Barcelona", () => {
      assert.equal(getProvinceName("B 1234 BL"), "Province of Barcelona");
    });

    it("should get Province of Badajoz", () => {
      assert.equal(getProvinceName("BA 1234 BL"), "Province of Badajoz");
    });

    it("should get Bilbao", () => {
      assert.equal(getProvinceName("BI 1234 BL"), "Bilbao");
    });

    it("should get Province of Burgos", () => {
      assert.equal(getProvinceName("BU 1234 BL"), "Province of Burgos");
    });

    it("should get Province of A Coruña", () => {
      assert.equal(getProvinceName("C 1234 BL"), "Province of A Coruña");
    });

    it("should get Province of Cádiz", () => {
      assert.equal(getProvinceName("CA 1234 BL"), "Province of Cádiz");
    });

    it("should get Province of Cáceres", () => {
      assert.equal(getProvinceName("CC 1234 BL"), "Province of Cáceres");
    });

    it("should get Ceuta", () => {
      assert.equal(getProvinceName("CE 1234 BL"), "Ceuta");
    });

    it("should get Province of Córdoba", () => {
      assert.equal(getProvinceName("CO 1234 BL"), "Province of Córdoba");
    });

    it("should get Province of Ciudad Real", () => {
      assert.equal(getProvinceName("CR 1234 BL"), "Province of Ciudad Real");
    });

    it("should get Castelló", () => {
      assert.equal(getProvinceName("CS 1234 BL"), "Castelló");
    });

    it("should get Province of Cuenca", () => {
      assert.equal(getProvinceName("CU 1234 BL"), "Province of Cuenca");
    });

    it("should get Bioko", () => {
      assert.equal(getProvinceName("FP 1234 BL"), "Bioko");
    });

    it("should get Province of Las Palmas", () => {
      assert.equal(getProvinceName("GC 1234 BL"), "Province of Las Palmas");
    });

    it("should get Gerona (Girona)", () => {
      assert.equal(getProvinceName("GE 1234 BL"), "Gerona (Girona)");
    });

    it("should get Province of Girona", () => {
      assert.equal(getProvinceName("GI 1234 BL"), "Province of Girona");
    });

    it("should get Province of Granada", () => {
      assert.equal(getProvinceName("GR 1234 BL"), "Province of Granada");
    });

    it("should get Province of Guadalajara", () => {
      assert.equal(getProvinceName("GU 1234 BL"), "Province of Guadalajara");
    });

    it("should get Province of Huelva", () => {
      assert.equal(getProvinceName("H 1234 BL"), "Province of Huelva");
    });

    it("should get Province of Huesca", () => {
      assert.equal(getProvinceName("HU 1234 BL"), "Province of Huesca");
    });

    it("should get Ifni", () => {
      assert.equal(getProvinceName("IF 1234 BL"), "Ifni");
    });

    it("should get Province of Jaén", () => {
      assert.equal(getProvinceName("J 1234 BL"), "Province of Jaén");
    });

    it("should get Province of Lleida", () => {
      assert.equal(getProvinceName("L 1234 BL"), "Province of Lleida");
    });

    it("should get Province of León", () => {
      assert.equal(getProvinceName("LE 1234 BL"), "Province of León");
    });

    it("should get Logroño", () => {
      assert.equal(getProvinceName("LO 1234 BL"), "Logroño");
    });

    it("should get La Rioja", () => {
      assert.equal(getProvinceName("LR 1234 BL"), "La Rioja");
    });

    it("should get Province of Lugo", () => {
      assert.equal(getProvinceName("LU 1234 BL"), "Province of Lugo");
    });

    it("should get Community of Madrid", () => {
      assert.equal(getProvinceName("M 1234 BL"), "Community of Madrid");
    });

    it("should get Province of Málaga", () => {
      assert.equal(getProvinceName("MA 1234 BL"), "Province of Málaga");
    });

    it("should get Melilla", () => {
      assert.equal(getProvinceName("ML 1234 BL"), "Melilla");
    });

    it("should get Region of Murcia", () => {
      assert.equal(getProvinceName("MU 1234 BL"), "Region of Murcia");
    });

    it("should get Navarre", () => {
      assert.equal(getProvinceName("NA 1234 BL"), "Navarre");
    });

    it("should get Oviedo", () => {
      assert.equal(getProvinceName("O 1234 BL"), "Oviedo");
    });

    it("should get Province of Ourense", () => {
      assert.equal(getProvinceName("OU 1234 BL"), "Province of Ourense");
    });

    it("should get Province of Palencia", () => {
      assert.equal(getProvinceName("P 1234 BL"), "Province of Palencia");
    });

    it("should get Palma, Majorca", () => {
      assert.equal(getProvinceName("PM 1234 BL"), "Palma, Majorca");
    });

    it("should get Province of Pontevedra", () => {
      assert.equal(getProvinceName("PO 1234 BL"), "Province of Pontevedra");
    });

    it("should get Rio Muni", () => {
      assert.equal(getProvinceName("RM 1234 BL"), "Rio Muni");
    });

    it("should get Santander", () => {
      assert.equal(getProvinceName("S 1234 BL"), "Santander");
    });

    it("should get Province of Salamanca", () => {
      assert.equal(getProvinceName("SA 1234 BL"), "Province of Salamanca");
    });

    it("should get Province of Seville", () => {
      assert.equal(getProvinceName("SE 1234 BL"), "Province of Seville");
    });

    it("should get Province of Segovia", () => {
      assert.equal(getProvinceName("SG 1234 BL"), "Province of Segovia");
    });

    it("should get Province of Soria", () => {
      assert.equal(getProvinceName("SO 1234 BL"), "Province of Soria");
    });

    it("should get Donostia", () => {
      assert.equal(getProvinceName("SS 1234 BL"), "Donostia");
    });

    it("should get Province of Tarragona", () => {
      assert.equal(getProvinceName("T 1234 BL"), "Province of Tarragona");
    });

    it("should get Province of Teruel", () => {
      assert.equal(getProvinceName("TE 1234 BL"), "Province of Teruel");
    });

    it("should get Province of Santa Cruz de Tenerife", () => {
      assert.equal(getProvinceName("TF 1234 BL"), "Province of Santa Cruz de Tenerife");
    });

    it("should get Province of Toledo", () => {
      assert.equal(getProvinceName("TO 1234 BL"), "Province of Toledo");
    });

    it("should get Province of Valencia", () => {
      assert.equal(getProvinceName("V 1234 BL"), "Province of Valencia");
    });

    it("should get Province of Valladolid", () => {
      assert.equal(getProvinceName("VA 1234 BL"), "Province of Valladolid");
    });

    it("should get Vitoria", () => {
      assert.equal(getProvinceName("VI 1234 BL"), "Vitoria");
    });

    it("should get Province of Zaragoza", () => {
      assert.equal(getProvinceName("Z 1234 BL"), "Province of Zaragoza");
    });

    it("should get Province of Zamora", () => {
      assert.equal(getProvinceName("ZA 1234 BL"), "Province of Zamora");
    });
  });
});
