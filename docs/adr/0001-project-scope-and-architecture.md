# ADR 0001: Project Scope, Technology Stack, and High-Fidelity UI Prototype for Unnoise

- **สถานะ (Status)**: Accepted
- **วันที่ (Date)**: 2026-10-16
- **หัวข้อ**: การกำหนดขอบเขต สถาปัตยกรรม และการออกแบบหน้าเว็บแบรนด์ "Unnoise"

### 1. บริบท (Context)
ผู้ใช้ต้องการส่งงานโมเดลหน้าเว็บไซต์ธุรกิจต่ออาจารย์ ในหัวข้อ "Unnoise" — นวัตกรรมหมอนอัจฉริยะ (Smart Sleep Pillow) ที่วัดค่าสุขภาพเหมือน Smartwatch แต่เน้นความเงียบสงบและการพักผ่อนที่ไร้เสียงรบกวน 

### 2. ข้อตกลงด้านดีไซน์และเทคโนโลยี (Decisions)
1. **Brand Identity**: ชื่อแบรนด์ **Unnoise** (Un-noise: ตัดเสียงรบกวน สร้างความสงบ)
2. **Visual Style & Mood**: โทน Light Mode คลีน มินิมอล ผ่อนคลาย (Off-white / Warm Gray ตัดด้วยสีเขียว Sage หรือฟ้า Slate) สไตล์ Muji / Japandi / Apple Health ผสมผสานความพรีเมียม ให้ความรู้สึกอบอุ่น สบายตา และน่าเชื่อถือ
3. **Architecture**: Vanilla HTML5 + Modern CSS3 + Vanilla JavaScript ไม่มี dependency ซับซ้อน เพื่อให้รันได้ทันทีโดยไม่ต้องลงเครื่องมือ build
4. **Key Interactive Highlight**: **Interactive Sleep Dashboard Simulator** สำหรับอาจารย์ทดลองคลิกกดดูค่าสถิติการนอนจริง (BPM, การกรน, ระยะการนอน, Sleep Score) โดยมีปุ่มสลับสถานะจำลอง (เช่น โหมดหลับเต็มอิ่ม vs คืนที่นอนกรน) พร้อมกราฟิกเคลื่อนไหวที่ดูประณีต

### 3. ผลกระทบ (Consequences)
- หน้ารองรับทั้ง Desktop และ Mobile (Responsive)
- โครงสร้างและองค์ประกอบของหน้าเว็บถูกออกแบบมาให้สาธิต (Present) ได้ประทับใจระดับ A+
