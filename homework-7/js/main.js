document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.js-write-pet-name');

    let decreasedHealth;
    let isThereTamagotchi = true

    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value === "") return;
        if (isThereTamagotchi) {
            renderTamagotchi();
            input.value = '';
            isThereTamagotchi = false
            playGame();
            setInterval(decreasedHealth, 3000);
        }
    });

    function renderTamagotchi() {
        const tamagotchiElements = `
            <div class="tamagotchi-content">
            <div class="tamagotchi-info">
                <div class="tamagotchi-info-name js-set-name">${input.value}</div>
                <p class="scale-name">hp</p>
                <div class="tamagotchi-info-hp scale js-set-hp"><div class="set-width-scale">100%</div></div>
                <p class="scale-name">saturation</p>
                <div class="tamagotchi-info-saturation scale js-set-saturation"><div class="set-width-scale">100%</div></div>
                <p class="scale-name">strength</p>
                <div class="tamagotchi-info-strength scale js-set-strength"><div class="set-width-scale">100%</div></div>
                <p class="scale-name">mood</p>
                <div class="tamagotchi-info-mood scale js-set-mood"><div class="set-width-scale">100%</div></div>
            </div>
            <div class="tamagotchi-buttons">
                <button class="btn drink">Drink</button>
                <button class="btn eat">Eat</button>
                <button class="btn play">Play</button>
                <button class="btn walk">Walk</button>
                <button class="btn sleep">Sleep</button>
                <button class="btn medicine">Medicine</button>
                <button class="btn smoke">Smoke</button>

            </div>
            <div class="message js-send-message">
                <p></p>
            </div>
            <div class="tamagotchi-pet">
                <div class="face"></div>
                <div class="right-arm"></div>
                <div class="left-arm"></div>
                <div class="right-leg"></div>
                <div class="left-leg"></div>
                <div class="emoji js-set-emoji"></div>
            </div>
        </div>`
        document.querySelector('.tamagotchi').insertAdjacentHTML('beforeend', tamagotchiElements);
    }

    function playGame() {
        const personName = document.querySelector(".js-set-name");
        const personHp = document.querySelector(".js-set-hp div");
        const personSaturation = document.querySelector(".js-set-saturation div");
        const personStrength = document.querySelector(".js-set-strength div");
        const personMood = document.querySelector(".js-set-mood div");
        const emoji = document.querySelector(".js-set-emoji");

        class Tamagotchi {
            constructor(props) {
                this.hp = props.hp;
                this.saturation = props.saturation;
                this.strength = props.strength;
                this.mood = props.mood;
            }

            play() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0) return;
                if (this.mood > 90) this.mood = 100;
                else this.mood += 10;
                if (this.saturation < 5) this.saturation = 0;
                else this.saturation -= 5;
                if (this.strength < 5) this.strength = 0;
                else this.strength -= 5;
                setSetting();
            }

            drink() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0) return;
                if (this.saturation > 95) this.saturation = 100;
                else this.saturation += 5
                setSetting();
            }

            eat() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0) return;
                if (this.saturation > 90) this.saturation = 100;
                else  this.saturation += 10
                setSetting();
            }

            walk() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0) return;
                if (this.mood > 95) this.mood = 100;
                else this.mood += 5;
                if (this.saturation < 5) this.saturation = 0;
                else this.saturation -= 5;
                if (this.strength < 5) this.strength = 0;
                else this.strength -= 5;
                setSetting();
            }

            sleep() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0)return;
                if (this.strength > 95) this.strength = 100
                else this.strength += 5;
                if (this.saturation < 15) this.saturation = 0
                else this.saturation -= 15;
                setSetting();
            }

            medicine() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0) return;
                if (this.hp > 85) this.hp = 100
                else this.hp += 15;
                setSetting();
            }

            smoke() {
                if (this.hp <= 0 || this.saturation <= 0 || this.strength <= 0 || this.mood <= 0) return;
                if (this.hp < 20) this.hp = 0
                else this.hp -= 20;
                if (this.mood > 85) this.mood = 100
                else this.mood += 15;
                setSetting();
            }
        }

        const pet = new Tamagotchi({hp:100, saturation: 100, strength: 100, mood: 100});

        function setSetting() {
            personHp.innerHTML = `${pet.hp}%`;
            personSaturation.innerHTML = `${pet.saturation}%`;
            personStrength.innerHTML = `${pet.strength}%`;
            personMood.innerHTML = `${pet.mood}%`;
            personHp.style.width = `${pet.hp}%`;
            personSaturation.style.width = `${pet.saturation}%`;
            personStrength.style.width = `${pet.strength}%`;
            personMood.style.width = `${pet.mood}%`;
            checkPersonInfo();
        }

        decreasedHealth = () => {
            if (pet.hp > 0 && pet.saturation > 0 && pet.strength > 0 && pet.mood > 0) {
                pet.hp--;
                pet.strength--;
                pet.saturation--;
                pet.mood--;
                setSetting();
            }
        }

        function checkPersonInfo() {
            const message = document.querySelector(".js-send-message p");
            if (pet.hp > 50 || pet.saturation > 50 || pet.strength > 50 || pet.mood > 50) emoji.style.backgroundImage = "url('./../img/smile.svg')";
            if (pet.hp < 50 || pet.saturation < 50 || pet.strength < 50 || pet.mood < 50) emoji.style.backgroundImage = "url('./../img/bad mood.svg')";
            if (pet.hp < 30 || pet.saturation < 30 || pet.strength < 30 || pet.mood < 30) emoji.style.backgroundImage = "url('./../img/sad.svg')";
            if (pet.hp <= 0 || pet.saturation <= 0 || pet.strength <= 0 || pet.mood <= 0) {
                emoji.style.backgroundImage = "url('./../img/dead.svg')";
                personName.classList.add("cross-out");
            }
            if (pet.strength <= 0) message.innerHTML = "your pet has no strength left to live";
            if (pet.mood <= 0) message.innerHTML = "your pet is depressed";
            if (pet.saturation <= 0) message.innerHTML = "your pet died of starvation";
            if (pet.hp <= 0) message.innerHTML = "your pet is terminally ill";
        }

        document.querySelector(".play").addEventListener("click", () => {pet.play()});
        document.querySelector(".drink").addEventListener("click", () => {pet.drink()});
        document.querySelector(".eat").addEventListener("click", () => {pet.eat()});
        document.querySelector(".walk").addEventListener("click", () => {pet.walk()});
        document.querySelector(".sleep").addEventListener("click", () => {pet.sleep()});
        document.querySelector(".medicine").addEventListener("click", () => {pet.medicine()});
        document.querySelector(".smoke").addEventListener("click", () => {pet.smoke()});
    }
})