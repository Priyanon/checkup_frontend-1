<template>
    <div>
        <div>
            <h1>ชื่อ</h1>
            <a href="#" class="previous round">&#8249;</a>
            <a href="#" class="next round">&#8250;</a>
        </div>
        <div>
            <label for="leave">ปี :</label>
            <select name="year" required @change="test()">
                <option value="2022">2022</option>
            </select>
        </div>
        <div>
            <table class="table tabel-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>เดือน</th>
                        <th>จำนวนวันที่มาทำงาน</th>
                        <th>จำนวนวันที่การลา</th>
                        <th>จำนวนวันที่หยุด</th>
                        <th>จำนวนวันที่มาสาย</th>
                        <th>จำนวนวันที่ขาด</th>
                    </tr>

                    <tr>
                        <th>มกราคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>กุมภาพันธ์</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>มีนาคม</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>เมษายน</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>พฤษภาคม:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>มิถุนายน:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>กรกฏาคม:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>สิงหาคม:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>กันยายน:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>ตุลาคม:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>พฤศจิกายน:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>ธันวาคม:</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>