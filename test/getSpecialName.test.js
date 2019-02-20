const assert = require("assert");
const { getSpecialName } = require("../dist/index");

describe("#getSpecialName", () => {
  describe("invalid", () => {
    describe("special plates only", () => {
      it("should work only with special plates 1", () => {
        assert.equal(getSpecialName("1234BCD"), null);
      });

      it("should work only with special plates 2", () => {
        assert.equal(getSpecialName("A 1234 BL"), null);
      });
    });

    describe("unknown special", () => {
      it("should not work with unknown code", () => {
        assert.equal(getSpecialName("AAA1234"), null);
      });
    });

    describe("wrong input", () => {
      it("should return null with null", () => {
        assert.equal(getSpecialName(null), null);
      });

      it("should return null with undefined", () => {
        assert.equal(getSpecialName(undefined), null);
      });

      it("should return null with empty", () => {
        assert.equal(getSpecialName(""), null);
      });
    });
  });

  describe("valid", () => {
    it("should get CME", () => {
      assert.equal(getSpecialName("CME1234"), "Corps of the Mossos d'Esquadra");
    });

    it("should get DGP", () => {
      assert.equal(getSpecialName("DGP1234"), "Spanish Police");
    });

    it("should get CNP", () => {
      assert.equal(getSpecialName("CNP1234"), "Spanish Police");
    });

    it("should get E", () => {
      assert.equal(getSpecialName("E1234"), "Autonomous police force of the Basque Country");
    });

    it("should get EA", () => {
      assert.equal(getSpecialName("EA1234"), "Air Force");
    });

    it("should get ET", () => {
      assert.equal(getSpecialName("ET1234"), "Spanish Army");
    });

    it("should get FAE", () => {
      assert.equal(getSpecialName("FAE1234"), "Allied Forces in Spain");
    });

    it("should get FN", () => {
      assert.equal(getSpecialName("FN1234"), "Spanish Navy");
    });

    it("should get GSH", () => {
      assert.equal(getSpecialName("GSH1234"), "Colonial police on Sahara");
    });

    it("should get PGC", () => {
      assert.equal(getSpecialName("PGC1234"), "Spanish civil guard");
    });

    it("should get MF", () => {
      assert.equal(getSpecialName("MF1234"), "Public Works Ministry");
    });

    it("should get MMA", () => {
      assert.equal(getSpecialName("MMA1234"), "Environment Ministry");
    });

    it("should get MOP", () => {
      assert.equal(getSpecialName("MOP1234"), "Public Works Ministry");
    });

    it("should get PME", () => {
      assert.equal(getSpecialName("PME1234"), "State owned vehicles");
    });

    it("should get PMM", () => {
      assert.equal(getSpecialName("PMM1234"), "State owned vehicles, on a Ministry");
    });

    it("should get Crown", () => {
      assert.equal(getSpecialName("Crown1234"), "King's Car");
    });
  });
});
