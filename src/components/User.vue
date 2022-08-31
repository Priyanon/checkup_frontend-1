<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: []
        }
    },
    mounted() {
        
    },
    methods: {
        async getUser(){
            await axios.get('http://localhost:3000/user').then(function(response){
                alert(response)
            })
        }
    }
}
</script>