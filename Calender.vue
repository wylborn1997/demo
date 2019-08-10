<template>
    <div class="calender">
        <div class="date-header">
            <div class="pre-month" @click="handlePrev"></div>
            <div class="show-date">{{ year }}年{{ month }}月{{ day }}日</div>
            <div class="next-month" @click="handleNext"></div>
        </div>
        <div class="date-content">
            <div class="week-header">
                <div
                v-for="item in ['日', '一', '二', '三', '四','五', '六' ]"
                :key="item"
                >{{ item }}</div>
            </div>
            <div class="week-day">
                <div
                class="every-day"
                v-for="item in 42"
                :key="item"
                >
                <div 
                v-if="item - beginDay > 0 && item - beginDay <= curDays"
                :class="{
                    'now-day':`${year}-${month}-${item - beginDay}` === curDate,
                    'active-day':`${year}-${month}-${item - beginDay}` ===`${year}-${month}-${day}`
                    }"
                @click="handleChooseDay(item - beginDay)"
                >{{ item - beginDay }}</div>
                <div class="other-day" v-else-if="item - beginDay <= 0">{{item - beginDay + prevDays}}</div>
                <div class="other-day" v-else>{{item - curDays -beginDay }}</div>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            year:null,
            month:null,
            day:null,
            curDate:null
        }
    },
    created(){
        this.getInitTime();
        // console.log(new Date(this.year, this.month -1,0).getDate());
    },
    methods:{
        getInitTime(){
            const data = new Date();
            this.year = data.getFullYear();
            this.month = data.getMonth() + 1;
            this.day = data.getDate();
            this.curDate = `${this.year}-${this.month}-${this.day}`
        },
        handleChooseDay(day){
            this.day = day
        },
        handlePrev(){
            if(this.month == 1){
                this.month = 12;
                this.year--
            }else{
                this.month--
            }
            this.computedDay();
        },
        handleNext(){
            if(this.month == 12){
                this.month = 1;
                this.year++
            }else{
                this.month++
            }
            this.computedDay();
        },
        computedDay(){
            const allDay = new Date(this.year, this.month, 0).getDate();
            if(this.day > allDay){
                this.day = allDay
            }
        }
    },
    computed:{
        beginDay(){
            return new Date(this.year, this.month - 1, 1).getDay();
        },
        curDays(){
            return new Date(this.year, this.month,0).getDate();
        },
        prevDays(){
            return new Date(this.year, this.month - 1,0).getDate();
        },
    
    }
}
</script>

<style>

*{
    margin: 0px;
    border: 0px;
    list-style: none;
}
.calender{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height:380px;
    width:420px;
    border: 1px solid #ccc;
}
.date-header{
    margin-left: 10px;
    height: 40px;
    width: 350px;
    line-height: 40px;
    text-align: center;
}
.pre-month{
    position: absolute;
    display: inline-block;
    height: 0px;
    width:0px;
    border:20px solid ;
    border-color: transparent rgb(35, 137, 206) transparent transparent;
}
.next-month{
    position: absolute;
    display: inline-block;
    height: 0px;
    width:0px;
    border:20px solid ;
    border-color: transparent transparent transparent  rgb(35, 137, 206);
}
.show-date{
    margin-left: 40px;
    margin-top: 0px;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    width: 310px;
    color: rgb(35, 137, 206);
}
.week-header{
    background: rgb(35, 137, 206);
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
}
.week-header div{
    margin: 0;
    padding: 0;
    display: inline-block;
    height: 20px;
    width: 60px;
}
.every-day{
    display: inline-block;
    height: 50px;
    width: 60px;
    text-align: center;
    line-height: 50px;
}
.other-day{
    color: #ccc;
}
.now-day{
    background: rgb(35, 137, 206);
}
.active-day{
    /* padding: 2px */
    /* border-sizing:content-box; */
    border: 2px solid rgb(35, 137, 206);
}
</style>


