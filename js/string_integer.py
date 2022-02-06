# ép dữ liệu chuyển đổi thành float và int
# dùng if else
user_input = input("Nhập tuổi của bạn ")
print("\n")
try:
    val = int(user_input)
    print("Dữ liệu nhập vào là int = ", val)
except ValueError:
    try:
        val = float(user_input)
        print("Dữ liệu nhâp vào là float = ", val)
    except ValueError:
        print("Dữ liệu nhập vào không phải là number")

# bài yêu cầu ng dùng nhập số 
# sử dụng vòng lặp while
while True:
    int_float = input("Vui lòng nhập vào một con số  : ")
    try:
        val = int(int_float)
        print("Dữ liệu bạn nhập vào là integer.")
        print("Giá trị của nó là: ", val)
        break; # Thoát khỏi vòng lặp
    except ValueError:
        try:
            float(int_float)
            print("Dữ liệu nhập vào là float")
            print("Giá trị của nó là: ", val)
            break; # Thoát khỏi vòng lặp
        except ValueError:
            print("đây không phải là số  , vui lòng nhập lại!")
    
