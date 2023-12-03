<template>
<div>
    <div class="body">
        <div class="container">
            <div class="bus">
                <div class="title">
                    <div class="auth">
                        <p>Name : <span class="chlidauth">{{ authuser }}</span></p>
                        <button v-on:click="logout">
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            Logout
                        </button>
                    </div>
                    <h2>Bus Ticket Booking System</h2>
                    <div class="stay-seat">
                        <ul>
                            <li>
                                <div class="available"></div>available
                            </li>
                            <li>
                                <div class="booked"></div>booked
                            </li>
                            <li>
                                <div class="sold"></div>sold
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content">
                    <div class="left-content">
                        <div class="driver-seat">
                            <ul>
                                <li><span class="material-symbols-outlined">
                                        floor
                                    </span>Entry</li>
                                <li><span class="material-symbols-outlined">
                                        search_hands_free
                                    </span>Driver</li>
                            </ul>
                        </div>
                        <div class="customer-seat">
                            <div class="left">
                                <ul>
                                    <li v-for="(seat,index) in seats" :key="seat.name" :class="seat.position" v-on:click="handleClick(index)">{{ seat.name }}</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="right-content">
                        <div class="table" v-if="selectSeat.length !== 0">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Seat Name</th>
                                        <th>Seat Position</th>
                                        <th>Seat Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="seat in selectSeat" :key="seat.name">
                                        <td>{{ seat.name }}</td>
                                        <td>{{ seat.type }}</td>
                                        <td>{{ seat.price }} tk</td>
                                    </tr>
                                    <tr v-if="applyCoupon !== null">
                                        <td colspan="2">Discount</td>
                                        <td>(-) {{ applyCoupon.discount }} tk</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Total</td>
                                        <td>{{ totalCost }} tk</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="coupon" v-if="applyCoupon === null">
                                <label>Apply Coupon :</label>
                                <input type="text" placeholder="type your coupon code" v-model="couponCode">
                            </div>
                            <div class="coupon success" v-else>
                                <label>Apply Coupon : </label>
                                <span>{{ applyCoupon.code }}</span>
                            </div>
                            <div class="info">
                                <label>Full Name :</label>
                                <input type="text" placeholder="type your username" v-model="username">
                                <label>Contact No :</label>
                                <input type="text" placeholder="type your phone number" v-model="contact">
                                <div class="button">
                                    <button class="booked" v-on:click="booked">booked</button>
                                    <button class="submit" v-on:click="submit">submit</button>
                                </div>
                            </div>
                        </div>
                        <div class="message-error" v-else>
                            <h3>No Seat Selected ?</h3>
                            <p>please select your seats first..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Ticket",
    data() {
        return {
            seats: [{
                    name: "A1",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "A2",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "B1",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "B2",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "A3",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "A4",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "B3",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "B4",
                    position: "available",
                    price: 550,
                    type: "business"
                },
                {
                    name: "A5",
                    position: "available",
                    price: 700,
                    type: "premium"
                },
                {
                    name: "A6",
                    position: "available",
                    price: 700,
                    type: "premium"
                },
                {
                    name: "B5",
                    position: "available",
                    price: 700,
                    type: "premium"
                },
                {
                    name: "B6",
                    position: "available",
                    price: 700,
                    type: "premium"
                },
                {
                    name: "A7",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "A8",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "B7",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "B8",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "A9",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "A0",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "B9",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "B0",
                    position: "available",
                    price: 500,
                    type: "economy"
                },
                {
                    name: "C1",
                    position: "available",
                    price: 300,
                    type: "normal"
                },
                {
                    name: "C2",
                    position: "available",
                    price: 300,
                    type: "normal"
                },
                {
                    name: "C3",
                    position: "available",
                    price: 300,
                    type: "normal"
                },
                {
                    name: "C4",
                    position: "available",
                    price: 300,
                    type: "normal"
                },
            ],
            applyCoupon: null,
            couponCode: "",
            coupons: [{
                    code: "100NAYAN",
                    discount: 100
                },
                {
                    code: "250WASIM",
                    discount: 250
                },
            ],
            username: "",
            contact: "",
            authuser: ""
        }
    },
    methods: {
        handleClick(i) {
            console.log(this.seats[i]);
            let catchseat = this.seats[i];
            if (catchseat.position === "booked" || catchseat.position === "sold") {
                alert('you cannot select this seats')
            } else {
                if (this.selectSeat.length > 2) {

                    alert('you cannot select more then 3 seats')
                } else {

                    catchseat.position = catchseat.position === 'available' ? 'select' : 'available'
                }
            }
        },
        submit() {
            if (this.username === "" && this.contact === "") {
                alert('input field cannot be null')
            } else {
                this.selectSeat.map((seat) => seat.position = "sold")
                this.applyCoupon = null
                this.couponCode = ""
            }
        },
        booked() {
            if (this.username === "" && this.contact === "") {
                alert('input field cannot be null')
            } else {
                this.selectSeat.map((seat) => seat.position = "booked")
                this.applyCoupon = null
                this.couponCode = ""
            }
        },
        logout() {
            localStorage.removeItem('users')
            this.$router.push({
                name: "Login"
            })
        }
    },
    computed: {
        selectSeat() {
            let totalSelectSeat = this.seats.filter((item) => item.position === 'select')
            return totalSelectSeat
        },
        totalCost() {
            let price = 0
            this.selectSeat.forEach((seat) => {
                price += seat.price
            })

            if (this.applyCoupon !== null) {
                price = price - this.applyCoupon.discount
            }
            return price
        }
    },
    watch: {
        couponCode(newValue, oldValue) {
            if (newValue.length > 7) {
                let searchCode = this.coupons.filter((item) => item.code == newValue)
                if (searchCode.length === 1) {
                    this.applyCoupon = searchCode[0]
                    this.couponCode = ''
                } else {
                    this.couponCode = oldValue
                    alert('coupon not valid')
                }
            }
        }
    },
    mounted() {
        let getData = localStorage.getItem('users')
        if (!getData) {
            this.$router.push({
                name: "Registration"
            })
        } else {
            let selectAuth = JSON.parse(localStorage.getItem('users'))
            this.authuser = selectAuth.name

            this.$router.push({
                name: "Ticket"
            })
        }
    }
}
</script>

<style scoped>
.body {
    background: #161A30;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bus {
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
}

.bus .title {
    text-align: center;
}

.bus .title .auth {
    display: flex;
    /* sakdfjsdf */
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.bus .title .auth p {
    font-size: 20px;
    font-weight: 600;
}

.bus .title .auth .chlidauth {
    color: #557C55;
    text-transform: uppercase;
}

.bus .title .auth button {
    padding: 15px 20px;
    background: #B31312;
    color: #fff;
    border: none;
    align-items: center;
    justify-content: center;
    display: flex;
}

.bus .title .stay-seat ul {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 30px;
}

.bus .title .stay-seat ul li {
    display: flex;
    align-items: center;
    gap: 8px;
}

.bus .title .stay-seat ul .available {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: green;
    display: inline-block;
}

.bus .title .stay-seat ul .booked {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #000;
    display: inline-block;
}

.bus .title .stay-seat ul .sold {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: red;
    display: inline-block;
}

.bus .content {
    margin-top: 50px;
    border: 1px solid #000;
    box-sizing: border-box;
    display: flex;
}

.bus .content .left-content {
    width: 31.8%;
    padding: 10px;
}

.bus .content .left-content .driver-seat ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.bus .content .left-content .driver-seat ul li {
    border: 1px solid #000;
    padding: 10px;
}

.bus .content .left-content .driver-seat ul li span {
    display: block;
    text-align: center;
}

.bus .content .left-content .customer-seat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.bus .content .left-content .customer-seat ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

/* .bus .content .left-content .customer-seat ul .clr{
    margin: 0px 20px;
} */

.bus .content .left-content .customer-seat ul li {
    border: 1px solid #000;
    padding: 10px;
}

.bus .content .left-content .customer-seat ul .available {
    background: #fff;
    color: #000;
}

.bus .content .left-content .customer-seat ul .select {
    background: green;
    color: #fff;
}

.bus .content .left-content .customer-seat ul .booked {
    background: #000;
    color: #fff;
}

.bus .content .left-content .customer-seat ul .sold {
    background: red;
    color: #fff;
}

.bus .content .left-content .customer-seat ul li:nth-child(2),
.bus .content .left-content .customer-seat ul li:nth-child(6),
.bus .content .left-content .customer-seat ul li:nth-child(10),
.bus .content .left-content .customer-seat ul li:nth-child(14),
.bus .content .left-content .customer-seat ul li:nth-child(18),
.bus .content .left-content .customer-seat ul li:nth-child(22) {
    margin-right: 50px;
}

.bus .content .right-content {
    width: 68.2%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 45px;
}

.bus .content .right-content .table .info {
    margin-top: 15px;
}

.bus .content .right-content .table .coupon {
    margin: 10px 0px;
}

.bus .content .right-content .table .coupon input {
    width: 250px;
    padding: 15px 10px;
    margin: 0px 8px;
}

.bus .content .right-content .table .info input {
    width: 160px;
    padding: 15px 10px;
    margin: 0px 8px;
}

.bus .content .right-content .table .info .button {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
}

.bus .content .right-content .table .info .booked {
    width: 150px;
    padding: 15px 10px;
    background: #000;
    color: #fff;
    border: none;
}

.bus .content .right-content .table .info .submit {
    width: 150px;
    padding: 15px 10px;
    background: #557C55;
    color: #fff;
    border: none;
}

.bus .content .right-content table {
    /* width: 50%; */
    border-collapse: collapse;
}

.bus .content .right-content table,
td,
th {
    border: 1px solid #000;
    padding: 0px;
}

.bus .content .right-content table thead th {
    background: #000;
    color: #fff;
    padding: 10px 15px;
}

.bus .content .right-content table tbody td {
    padding: 10px 15px;
}

.success {
    color: green;
    font: 18px;
    font-weight: 600;
}

.message-error {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.message-error h3 {
    color: #B31312;
    font-size: 20px;
}

.message-error p {
    color: #3A4D39;
    font-size: 16px;
}
</style>
