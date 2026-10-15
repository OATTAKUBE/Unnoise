# ADR 0002: Interactive Simulator & In-Browser Audio Synthesis

- **สถานะ (Status)**: Accepted
- **วันที่ (Date)**: 2026-10-16
- **หัวข้อ**: การจำลองระบบตรวจวัดสุขภาพและการสังเคราะห์เสียงบำบัด White/Pink Noise โดยตรงบนเบราว์เซอร์

### 1. บริบท (Context)
สำหรับการนำเสนองานกับอาจารย์ เว็บไซต์จำเป็นต้องมีจุดขายที่สามารถกดทดสอบได้จริง (Demonstrable Value) สองฟังก์ชันที่สำคัญคือ:
1. การจำลองสถิติสุขภาพการนอน (Sleep Biometrics Dashboard)
2. การจำลองเสียงบำบัดกลบเสียงรบกวน (White Noise / Pink Noise Therapy)

### 2. การตัดสินใจ (Decision)
1. **Sleep Dashboard Simulator**:
   - พัฒนาด้วย JavaScript จัดการ State จำลองข้อมูล (Data States) 2 รูปแบบหลัก:
     - `deep_rest`: สถิติการหลับสมบูรณ์ (Sleep Score 92, Heart Rate 54 BPM, Snore 0dB, Deep Sleep 38%)
     - `snore_event`: สถิติการนอนที่มีเสียงรบกวนและการกรน (Sleep Score 65, Heart Rate 68 BPM, Snore 48dB, Deep Sleep 15%)
   - มี Canvas / SVG สำหรับวาดกราฟคลื่นชีพจรแบบไดนามิกเคลื่อนไหวได้จริง
2. **Ambient Sound Generator (Web Audio API)**:
   - ใช้ Web Audio API (`AudioContext`, `createBufferSource`, `BiquadFilterNode`, `GainNode`) เพื่อสังเคราะห์เสียง White Noise, Pink Noise, และ Rain Simulator โดยตรงจากโค้ด
   - ข้อดี: **ไม่จำเป็นต้องโหลดไฟล์เสียง .mp3 ภายนอก** ทำให้เว็บโหลดเร็ว 100% ไม่มีปัญหาลิขสิทธิ์ และไม่สะดุดแม้เปิดแบบออฟไลน์

### 3. ผลลัพธ์ (Consequences)
- อาจารย์สามารถกดเปิด-ปิดเสียง ลองปรับระดับเสียง และกดสลับโหมดสุขภาพได้ทันทีระหว่างพรีเซนต์ เพิ่มความน่าประทับใจระดับสูงมาก
