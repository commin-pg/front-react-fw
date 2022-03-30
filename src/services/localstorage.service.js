/*******************
 * Json 형태의 데이터를 스토리지에 저장하기 위해서
 * Json String 으로 변환 후 스토리지에 저장하는 서비스
 */
class localStorageService {
    ls = window.localStorage;

    setItem(key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    }

    getItem(key) {
        let value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        } catch (e) {
            return null;
        }
    }
}

export default new localStorageService();