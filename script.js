class Smoothie {
    constructor(name, size, ingredients, price) {
      this.name = name;
      this.size = size;
      this.ingredients = ingredients;
      this.price = price;
    }
  
    getDescription() {
      return `${this.name}'s ${this.size} Smoothie: ${this.ingredients.join(', ')}. Total: $${this.price.toFixed(2)}`;
    }
  }
  
  document.getElementById('order-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const size = document.getElementById('size').value;
    const ingredients = [];
    let price = 0;
  
    document.querySelectorAll('.ingredients input:checked').forEach((checkbox) => {
      ingredients.push(checkbox.value);
      price += parseFloat(checkbox.dataset.price);
    });
  
    if (size === 'Small') price += 3;
    if (size === 'Medium') price += 4.5;
    if (size === 'Large') price += 6;
  
    if (name && size && ingredients.length > 0) {
      const smoothie = new Smoothie(name, size, ingredients, price);
      document.getElementById('summary-text').textContent = smoothie.getDescription();
    } else {
      alert('Please fill out all fields and select at least one ingredient.');
    }
  });
  