/*closuer + ajax요청 예시*/
let reply = function () {
        /*add*/
        function add(reply, callback) {
            console.log("Reply Module....");
            //제이쿼리 ajax 메서드
            $.ajax({
                type: "post",                  //Http메서드방식 
                url: "/replies/new",           //요청명
                data: JSON.stringify(reply),   //데이터를 json문자열로 변환
                // => ReplyVO 타입을 json 문자열로 변환
                contentType: "application/json; charset=utf-8",   //전송 데이터 MIME

                //요청 성공시 실행할 콜백함수
                success: function (result, status, xhr) {
                    if (callback) {   //넘어온 객체 = 위에 파라미터 callback으로 받음
                        callback(result); //서버에서 반환한 결과를 콜백으로 전달
                    }
                },

                //요청 실패시 처리	
                error: function (xhr, status, er) {
                    if (error) {
                        error(er);
                    }
                }
            });
        }

        /* b. List */
        function getList(param, callback, error) {
            var bno = param.bno;
            var page = param.page || 1;
            $.ajax({
                type: "get",
                url: "/replies/pages/" + bno + "/" + page + ".json",
                success: function (result, status, xhr) {
                    if (callback) {
                        callback(result);
                    }
                },
                error: function (xhr, status, er) {
                    if (error) {
                        error(er);
                    }
                },
            });
        }

        /* c. Delete */
        function remove(rno, callback, error) {
            $.ajax({
                type: "delete",
                url: "/replies/" + rno,
                success: function (result, status, xhr) {
                    if (callback) {
                        callback(result);
                    }
                },
                error: function (xhr, status, er) {
                    if (error) {
                        error(er);
                    }
                },
            });
        }

        /* d. Update */
        function update(reply, callback, error) {
            $.ajax({
                type: "put",
                url: "/replies/" + reply.rno,
                data: JSON.stringify(reply),
                contentType: "application/json; charset=utf-8",
                success: function (result2, status, xhr) {
                    if (callback) {
                        callback(result2);
                    }
                },
                error: function (xhr, status, er) {
                    if (error) {
                        error(er);
                    }
                },
            });
        }

        /* e. Get */
        function get(rno, callback, error) {
            $.ajax({
                type: "get",
                url: "/replies/" + rno + ".json",
                success: function (result, status, xhr) {
                    if (callback) {
                        callback(result);
                    }
                },
                error: function (xhr, status, er) {
                    if (error) {
                        error(er);
                    }
                },
            });
        }

        /* return */
        return {
            add: add,
            getList: getList,
            remove: remove,
            update: update,
            get: get
        };
    }
