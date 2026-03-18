export default function Loading() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>Memuat data...</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
  },
  spinner: {
    width: '40px',
    height: '40px',
    margin: '0 auto',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #1B4F72',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};