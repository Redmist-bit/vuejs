import http from "./http"
// get
let token=""

token = localStorage.getItem('token')
class OrderService {
    
    gridData(){
        return http.get('/customers?token='+token)
    }
    
    add(data){
        return http.post('/customers?token='+this.token, data)
    }
    
    update(id, data) {
        return http.put('/customers/' + id +'?token='+this.token, data);
    }
    
    hapus(id) {
        return http.delete('/customers/'+id+'?token='+this.token);
    }

}
export default new OrderService();