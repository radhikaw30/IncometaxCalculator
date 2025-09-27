function calculateTax() {
      let sal = document.getElementById("salary").value;
      sal = parseInt(sal);

      if (isNaN(sal) || sal <= 0) {
        document.getElementById("result").innerText = "Please enter a valid monthly salary.";
        return;
      }

      let asal = 12 * sal - 50000;
      let bitax = 0, cess = 0, totalTax = 0;
      let message = "";

      if (asal <= 250000) {
        message = "Annual Taxable Income: ₹" + asal + "\nIncome Tax: ₹0 (No tax applicable)";
      }
      else if (asal <= 500000) {
        bitax = (asal - 250000) * 0.05;
        cess = bitax * 0.04;
        totalTax = bitax + cess;
        message = `Annual Taxable Income: ₹${asal}
Basic Tax (5%): ₹${bitax.toFixed(2)}
Cess (4%): ₹${cess.toFixed(2)}
Total Tax Payable: ₹${totalTax.toFixed(2)}`;
      }
      else if (asal <= 1000000) {
        bitax = (asal - 500000) * 0.20 + 12500;
        cess = bitax * 0.04;
        totalTax = bitax + cess;
        message = `Annual Taxable Income: ₹${asal}
Basic Tax (20%): ₹${(bitax - 12500).toFixed(2)}
Cess (4%): ₹${cess.toFixed(2)}
Total Tax Payable: ₹${totalTax.toFixed(2)}`;
      }
      else {
        bitax = (asal - 1000000) * 0.30 + 112500;
        cess = bitax * 0.04;
        totalTax = bitax + cess;
        message = `Annual Taxable Income: ₹${asal}
Basic Tax (30%): ₹${(bitax - 112500).toFixed(2)}
Cess (4%): ₹${cess.toFixed(2)}
Total Tax Payable: ₹${totalTax.toFixed(2)}`;
      }
    document.getElementById("result").innerText = message;
    }